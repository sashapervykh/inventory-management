import { ID_PARTS_TYPES } from "../idPartsTypes";
import { BIT_20_VALUES } from "./bit20Values";
import { BIT_32_VALUES } from "./bit32Values";
import { DATE_VALUES } from "./dateValues";
import { DIGIT_6_VALUES } from "./digit6Values";
import { DIGIT_9_VALUES } from "./digit9Values";
import { GUID_VALUES } from "./guidValues";
import { SEQUENCE_VALUES } from "./sequenceValues";

export const examplePartValues = {
  [`${ID_PARTS_TYPES.BIT_20}`]: BIT_20_VALUES,
  [`${ID_PARTS_TYPES.BIT_32}`]: BIT_32_VALUES,
  [`${ID_PARTS_TYPES.DATE_TIME}`]: DATE_VALUES,
  [`${ID_PARTS_TYPES.DIGIT_6}`]: DIGIT_6_VALUES,
  [`${ID_PARTS_TYPES.DIGIT_9}`]: DIGIT_9_VALUES,
  [`${ID_PARTS_TYPES.GUID}`]: GUID_VALUES,
  [`${ID_PARTS_TYPES.SEQUENCE}`]: SEQUENCE_VALUES,
};
