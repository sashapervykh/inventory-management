import { getFrontendName } from "../../../shared/utils/getFrontendName.js";
import type { BackendUsers } from "../types/BackendUser.js";

export function getFrontendUsers(users: BackendUsers) {
  return users.map((user) => {
    const { firstName, lastName, fullName } = getFrontendName(
      user.firstName,
      user.lastName,
    );
    return {
      id: user.id,
      email: user.email,
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
      type: user.type,
      status: user.status,
    };
  });
}
