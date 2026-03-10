import { getFrontendName } from "../../../shared/utils/getFrontendName.js";
import type { BackendUsers } from "../types/BackendUser.js";

export function getFrontendUsers(users: BackendUsers) {
  return users.map((user) => {
    const { firstName, lastName, fullName } = getFrontendName(
      user.first_name,
      user.last_name,
    );
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
