import passport from "passport";
import {
  Strategy as GoogleStrategy,
  type Profile,
  type VerifyCallback,
} from "passport-google-oauth20";
import { prisma } from "../prisma.js";
import { ENV } from "../../constants/env.js";
import { AUTH_ROUTES } from "../../constants/routes/authRoutes.js";
import { ENDPOINTS } from "../../constants/routes/endpoints.js";
import { AUTH_PROVIDERS } from "../../constants/authProviders.js";

export function useGoogleStrategy() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: ENV.GOOGLE_CLIENT_ID,
        clientSecret: ENV.GOOGLE_CLIENT_SECRET,
        callbackURL: `${ENDPOINTS.AUTH}/${AUTH_ROUTES.GOOGLE.CALLBACK}`,
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
              provider_provider_id: { provider, provider_id: providerId },
            },
            update: { last_login_at: new Date() },
            create: {
              first_name: profile.name?.givenName,
              last_name: profile.name?.familyName,
              provider,
              provider_id: providerId,
              email,
              last_login_at: new Date(),
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
