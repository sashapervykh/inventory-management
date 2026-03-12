import type { Key } from "react";

export interface TypeUpdateDto {
  userIds: Key[];
  userType: "user" | "admin";
}
