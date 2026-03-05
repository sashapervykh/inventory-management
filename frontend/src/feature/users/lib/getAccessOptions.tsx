import type { User } from "../../../entity/user/model/User";

export function getAccessOptions(users: User[] | undefined) {
  if (!users) {
    return [{ label: "No users found", value: "No users found" }];
  }
  return users.map((user) => ({
    value: `${user.firstName} ${user.lastName} ${user.email}`,
    label: `Name: ${user.firstName} ${user.lastName}, email: ${user.email}`,
  }));
}
