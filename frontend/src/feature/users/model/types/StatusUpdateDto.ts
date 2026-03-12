import type { Key } from "react";

export interface StatusUpdateDto {
  userIds: Key[];
  isBlocked: boolean;
}
