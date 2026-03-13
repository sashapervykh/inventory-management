import passport from "passport";
import { Strategy as GithubStrategy, type Profile } from "passport-github2";
import { prisma } from "../prisma.js";
import { ENV } from "../../constants/env.js";
import { AUTH_PROVIDERS } from "../../constants/authProviders.js";

export function useGitHubStrategy() {
  passport.use(
    new GithubStrategy(
      {
        clientID: ENV.GITHUB_CLIENT_ID,
        clientSecret: ENV.GITHUB_CLIENT_SECRET,
        callbackURL: ENV.GITHUB_CALLBACK_URL,
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
              provider_providerId: { provider, providerId: providerId },
            },
            update: { lastLoginAt: new Date() },
            create: {
              firstName:
                profile.name?.givenName ??
                profile.displayName ??
                profile.username,
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
