import type { User } from "@prisma/client";

export function getFrontendUser(user: User) {
  const { id, firstName, lastName, email, type } = user;
  return { id, firstName, lastName, email, type };
}
