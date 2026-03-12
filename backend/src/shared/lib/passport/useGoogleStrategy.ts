import passport from "passport";
import {
  Strategy as GoogleStrategy,
  type Profile,
  type VerifyCallback,
} from "passport-google-oauth20";
import { prisma } from "../prisma.js";
import { ENV } from "../../constants/env.js";
import { AUTH_PROVIDERS } from "../../constants/authProviders.js";

export function useGoogleStrategy() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: ENV.GOOGLE_CLIENT_ID,
        clientSecret: ENV.GOOGLE_CLIENT_SECRET,
        callbackURL: ENV.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"],
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
      ) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) {
            return done(null, false);
          }
          const provider = AUTH_PROVIDERS.GOOGLE;
          const providerId = profile.id;
          const user = await prisma.user.upsert({
            where: {
              provider_providerId: { provider, providerId: providerId },
            },
            update: { lastLoginAt: new Date() },
            create: {
              firstName: profile.name?.givenName,
              lastName: profile.name?.familyName,
              provider,
              providerId: providerId,
              email,
              lastLoginAt: new Date(),
            },
          });

          done(null, user);
        } catch (err) {
          done(err);
        }
      },
    ),
  );
}
