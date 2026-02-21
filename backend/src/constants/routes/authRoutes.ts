import { AUTH_PROVIDERS } from "../authProviders.js";
import { ENDPOINTS } from "./endpoints.js";

export const AUTH_ROUTES = {
  GOOGLE: {
    MAIN: `/${AUTH_PROVIDERS.GOOGLE}`,
    CALLBACK: `/${AUTH_PROVIDERS.GOOGLE}/callback`,
  },
  FACEBOOK: {
    MAIN: `/${AUTH_PROVIDERS.FACEBOOK}`,
    CALLBACK: `/${AUTH_PROVIDERS.FACEBOOK}/callback`,
  },
};
