import { AUTH_PROVIDERS } from "../authProviders.js";

export const AUTH_ROUTES = {
  REGISTER: "/register",
  LOGIN: "/login",
  LOGOUT: "/logout",
  GOOGLE: {
    MAIN: `/${AUTH_PROVIDERS.GOOGLE}`,
    CALLBACK: `/${AUTH_PROVIDERS.GOOGLE}/callback`,
  },
  GITHUB: {
    MAIN: `/${AUTH_PROVIDERS.GITHUB}`,
    CALLBACK: `/${AUTH_PROVIDERS.GITHUB}/callback`,
  },
};
