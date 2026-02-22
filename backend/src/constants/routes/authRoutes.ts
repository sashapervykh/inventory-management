import { AUTH_PROVIDERS } from "../authProviders.js";

export const AUTH_ROUTES = {
  LOGOUT: "/logout",
  GOOGLE: {
    MAIN: `/${AUTH_PROVIDERS.GOOGLE}`,
    CALLBACK: `/${AUTH_PROVIDERS.GOOGLE}/callback`,
  },
  FACEBOOK: {
    MAIN: `/${AUTH_PROVIDERS.FACEBOOK}`,
    CALLBACK: `/${AUTH_PROVIDERS.FACEBOOK}/callback`,
  },
};
