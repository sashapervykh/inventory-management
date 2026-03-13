export function validateStringEnv(envName: string) {
  const env = process.env[envName];
  if (env && typeof env === "string") {
    return env;
  }
  throw new Error(`${envName} has wrong type or was not provided`);
}
