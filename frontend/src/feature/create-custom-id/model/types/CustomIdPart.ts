import type { IdPartType } from "./IdPartType";

export interface CustomIdPart {
  type: IdPartType;
  name: number;
  key: number;
  id: number;
}
