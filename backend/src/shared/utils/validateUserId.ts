import { AuthError } from "../errors/AuthError.js";

export function validateUserId(id: unknown) {
  if (typeof id !== "string" || id.length === 0) {
    throw new AuthError();
  }
  return id;
}
