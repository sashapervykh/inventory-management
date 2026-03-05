import type { BackendUsers } from "../types/BackendUser.js";

export function getFrontendUsers(users: BackendUsers) {
  return users.map((user) => {
    const firstName = user.first_name ?? "Anonymous";
    const lastName = user.last_name ?? "";
    const fullName =
      firstName === "Anonymous"
        ? "Anonymous"
        : lastName
          ? `${firstName} ${lastName}`
          : `${firstName}`;
    return {
      id: user.id,
      email: user.email,
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      lastLoginAt: user.last_login_at,
      createdAt: user.createdAt,
      type: user.type,
    };
  });
}
