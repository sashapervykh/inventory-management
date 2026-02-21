export function validateNumberEnv(envName: string) {
  const env = process.env[envName];
  const envNumber = Number(env);
  if (typeof envNumber === "number" && !Number.isNaN(envNumber)) {
    return envNumber;
  }
  throw new Error(`${envName} has wrong type or was not provided`);
}
