import passport from "passport";
import { Strategy as GithubStrategy, type Profile } from "passport-github2";
import { prisma } from "../prisma.js";
import { ENV } from "../../constants/env.js";
import { AUTH_ROUTES } from "../../constants/routes/authRoutes.js";
import { ENDPOINTS } from "../../constants/routes/endpoints.js";
import { AUTH_PROVIDERS } from "../../constants/authProviders.js";

export function useGitHubStrategy() {
  passport.use(
    new GithubStrategy(
      {
        clientID: ENV.GITHUB_CLIENT_ID,
        clientSecret: ENV.GITHUB_CLIENT_SECRET,
        callbackURL: `${ENDPOINTS.AUTH}${AUTH_ROUTES.GITHUB.CALLBACK}`,
        scope: ["user:email"],
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: (_error: any, _user?: any, _info?: any) => void,
      ) => {
        try {
          const email = profile.emails?.[0]?.value ?? "no email";
          const provider = AUTH_PROVIDERS.GITHUB;
          const providerId = profile.id;
          const user = await prisma.user.upsert({
            where: {
              provider_provider_id: { provider, provider_id: providerId },
            },
            update: { last_login_at: new Date() },
            create: {
              first_name:
                profile.name?.givenName ??
                profile.displayName ??
                profile.username,
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
