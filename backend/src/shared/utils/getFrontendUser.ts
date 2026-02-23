import type { User } from "@prisma/client";

export function getFrontendUser(user: User) {
  const { id, first_name: firstName, last_name: lastName, email, type } = user;
  return { id, firstName, lastName, email, type };
}
