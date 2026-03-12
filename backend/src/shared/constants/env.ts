import { validateNumberEnv } from "../utils/validateNumberEnv.js";
import { validateStringEnv } from "../utils/validateStringEnv.js";
import { ENV_NAMES } from "./envNames.js";

export const ENV = {
  PORT: validateNumberEnv(ENV_NAMES.PORT),
  FRONTEND_URL: validateStringEnv(ENV_NAMES.FRONTEND_URL),
  DATABASE_URL: validateStringEnv(ENV_NAMES.DATABASE_URL),
  GOOGLE_CLIENT_ID: validateStringEnv(ENV_NAMES.GOOGLE_CLIENT_ID),
  GOOGLE_CLIENT_SECRET: validateStringEnv(ENV_NAMES.GOOGLE_CLIENT_SECRET),
  GITHUB_CLIENT_ID: validateStringEnv(ENV_NAMES.GITHUB_CLIENT_ID),
  GITHUB_CLIENT_SECRET: validateStringEnv(ENV_NAMES.GITHUB_CLIENT_SECRET),
  GOOGLE_CALLBACK_URL: validateStringEnv(ENV_NAMES.GOOGLE_CALLBACK_URL),
  GITHUB_CALLBACK_URL: validateStringEnv(ENV_NAMES.GITHUB_CALLBACK_URL),
  JWT_SECRET: validateStringEnv(ENV_NAMES.JWT_SECRET),
  SALTS_ROUNDS: validateNumberEnv(ENV_NAMES.SALTS_ROUNDS),
};
