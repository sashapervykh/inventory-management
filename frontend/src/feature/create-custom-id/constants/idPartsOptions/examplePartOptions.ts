import { BIT_OPTIONS } from "./bitOptions";
import { DATE_OPTIONS } from "./dateOptions";
import { DIGIT_OPTIONS } from "./digitOptions";
import { GUID_OPTIONS } from "./guidOptions";
import { ID_PARTS_TYPES } from "../idPartsTypes";
import { SEQUENCE_OPTIONS } from "./sequenceOptions";

export const examplePartOptions = {
  [`${ID_PARTS_TYPES.BIT_20}`]: BIT_OPTIONS,
  [`${ID_PARTS_TYPES.BIT_32}`]: BIT_OPTIONS,
  [`${ID_PARTS_TYPES.DATE_TIME}`]: DATE_OPTIONS,
  [`${ID_PARTS_TYPES.DIGIT_6}`]: DIGIT_OPTIONS,
  [`${ID_PARTS_TYPES.DIGIT_9}`]: DIGIT_OPTIONS,
  [`${ID_PARTS_TYPES.GUID}`]: GUID_OPTIONS,
  [`${ID_PARTS_TYPES.SEQUENCE}`]: SEQUENCE_OPTIONS,
};
