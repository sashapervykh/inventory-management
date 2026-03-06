import type { User } from "../../../entity/user/model/User";

export function getAccessOptions(users: [] | undefined) {
  if (!users) {
    return [{ label: "No users found", value: "No users found" }];
  }
  return users.map((user) => ({
    value: user.id,
    label: `${user.fullName}, email: ${user.email}`,
  }));
}
