import passport from "passport";
import { Strategy as FacebookStrategy, type Profile } from "passport-facebook";
import { prisma } from "../prisma.js";
import { ENV } from "../../constants/env.js";
import { AUTH_ROUTES } from "../../constants/routes/authRoutes.js";
import { ENDPOINTS } from "../../constants/routes/endpoints.js";
import { AUTH_PROVIDERS } from "../../constants/authProviders.js";

export function useFacebookStrategy() {
  passport.use(
    new FacebookStrategy(
      {
        clientID: ENV.FACEBOOK_CLIENT_ID,
        clientSecret: ENV.FACEBOOK_CLIENT_SECRET,
        callbackURL: `${ENDPOINTS.AUTH}${AUTH_ROUTES.FACEBOOK.CALLBACK}`,
        scope: ["profile", "email"],
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void,
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
