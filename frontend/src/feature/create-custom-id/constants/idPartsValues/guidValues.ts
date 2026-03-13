import type { ValueObject } from "../../model/types/ValueObject";

const guid = "550e8400-e29b-41d4-a716-446655440000";

export const GUID_VALUES: ValueObject = {
  Uppercase: guid.toUpperCase(),
  Lowercase: guid,
  ["Joined Uppercase"]: guid.toUpperCase().split("-").join(""),
  ["Joined Lowercase"]: guid.split("-").join(""),
};
