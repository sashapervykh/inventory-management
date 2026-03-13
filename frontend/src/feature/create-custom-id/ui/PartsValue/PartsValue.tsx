import { ID_PARTS_TYPES } from "../../constants/idPartsTypes";
import type { IdPartType } from "../../model/types/IdPartType";
import { PartsValueInput } from "./PartsValueInput";
import { PartsValueSelect } from "./PartsValueSelect";

export function PartsValue({ type, name }: { type: IdPartType; name: number }) {
  return type === ID_PARTS_TYPES.FIXED ? (
    <PartsValueInput name={name} />
  ) : (
    <PartsValueSelect name={name} type={type} />
  );
}
