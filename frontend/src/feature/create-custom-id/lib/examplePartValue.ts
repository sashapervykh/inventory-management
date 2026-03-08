import { ID_PARTS_TYPES } from "../constants/idPartsTypes";
import { examplePartValues } from "../constants/idPartsValues/examplePartOptions";

export const examplePartValue = {
  [`${ID_PARTS_TYPES.FIXED}`]: (value: string) => {
    return value;
  },
  [`${ID_PARTS_TYPES.BIT_20}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.BIT_20][value];
  },
  [`${ID_PARTS_TYPES.BIT_32}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.BIT_32][value];
  },
  [`${ID_PARTS_TYPES.DATE_TIME}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.DATE_TIME][value];
  },
  [`${ID_PARTS_TYPES.DIGIT_6}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.DIGIT_6][value];
  },
  [`${ID_PARTS_TYPES.DIGIT_9}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.DIGIT_9][value];
  },
  [`${ID_PARTS_TYPES.GUID}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.GUID][value];
  },
  [`${ID_PARTS_TYPES.SEQUENCE}`]: (value: string) => {
    return examplePartValues[ID_PARTS_TYPES.SEQUENCE][value];
  },
};
