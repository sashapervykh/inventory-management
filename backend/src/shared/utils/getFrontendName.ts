import { ANONYMOUS } from "../constants/ANONYM.js";

export function getFrontendName(
  firstName: string | null,
  lastName: string | null,
) {
  const frontendFirstName = firstName ?? ANONYMOUS;
  const frontendLastName = lastName ?? "";
  const fullName =
    firstName === ANONYMOUS
      ? ANONYMOUS
      : lastName
        ? `${firstName} ${lastName}`
        : `${firstName}`;
  return { firstName: frontendFirstName, lastName: frontendLastName, fullName };
}
