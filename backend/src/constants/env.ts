import { validateNumberEnv } from "../utils/validateNumberEnv.js";
import { validateStringEnv } from "../utils/validateStringEnv.js";
import { ENV_NAMES } from "./envNames.js";

export const ENV = {
  PORT: validateNumberEnv(ENV_NAMES.PORT),
  FRONTEND_URL: validateStringEnv(ENV_NAMES.FRONTEND_URL),
  DATABASE_URL: validateStringEnv(ENV_NAMES.DATABASE_URL),
  GOOGLE_CLIENT_ID: validateStringEnv(ENV_NAMES.GOOGLE_CLIENT_ID),
  GOOGLE_CLIENT_SECRET: validateStringEnv(ENV_NAMES.GOOGLE_CLIENT_SECRET),
  FACEBOOK_CLIENT_ID: validateStringEnv(ENV_NAMES.FACEBOOK_CLIENT_ID),
  FACEBOOK_CLIENT_SECRET: validateStringEnv(ENV_NAMES.FACEBOOK_CLIENT_SECRET),
  JWT_SECRET: validateStringEnv(ENV_NAMES.JWT_SECRET),
};
