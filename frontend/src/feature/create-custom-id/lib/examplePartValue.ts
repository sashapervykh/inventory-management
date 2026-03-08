import { ID_PARTS_TYPES } from "../constants/idPartsTypes";

export const examplePartValue = {
  [`${ID_PARTS_TYPES.FIXED}`]: (value: string) => {
    return value;
  },
  [`${ID_PARTS_TYPES.BIT_20}`]: (value: string) => {
    return ID_PARTS_TYPES.BIT_20;
  },
  [`${ID_PARTS_TYPES.BIT_32}`]: (value: string) => {
    return ID_PARTS_TYPES.BIT_32;
  },
  [`${ID_PARTS_TYPES.DATE_TIME}`]: (value: string) => {
    return ID_PARTS_TYPES.DATE_TIME;
  },
  [`${ID_PARTS_TYPES.DIGIT_6}`]: (value: string) => {
    return ID_PARTS_TYPES.DIGIT_6;
  },
  [`${ID_PARTS_TYPES.DIGIT_9}`]: (value: string) => {
    return ID_PARTS_TYPES.DIGIT_9;
  },
  [`${ID_PARTS_TYPES.GUID}`]: (value: string) => {
    return ID_PARTS_TYPES.GUID;
  },
  [`${ID_PARTS_TYPES.SEQUENCE}`]: (value: string) => {
    return ID_PARTS_TYPES.SEQUENCE;
  },
};
