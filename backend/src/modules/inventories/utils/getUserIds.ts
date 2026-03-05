import { userIdsSchema } from "../schemas/userIds.js";

export function getUserIds(userIds: unknown) {
  const typedUserIds = userIdsSchema.parse(userIds);
  return typedUserIds.map((element) => element.id);
}
