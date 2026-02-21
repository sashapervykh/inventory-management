import passport from "passport";
import {
  Strategy as GoogleStrategy,
  type Profile,
  type VerifyCallback,
} from "passport-google-oauth20";
import { prisma } from "../prisma.js";

export function useGoogleStrategy() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env["GOOGLE_CLIENT_ID"],
        clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
        callbackURL: "/auth/google/callback",
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
          const provider = profile.provider;
          const providerId = profile.id;
          const firstName = profile.name?.givenName;
          const lastName = profile.name?.familyName;
          const user = await prisma.user.upsert({
            where: {
              provider_provider_id: { provider, provider_id: providerId },
            },
            update: { last_login_at: new Date() },
            create: {
              first_name: firstName ?? "",
              last_name: lastName ?? "",
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
