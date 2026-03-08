import { ID_PARTS_TYPES } from "../constants/idPartsTypes";

interface Props {
  [key: string]: string;
}

export function getExamplePart(props: Props) {
  const [type, value, ..._] = Object.values(props);
  return examplePartValue[type](value);
}

const examplePartValue = {
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
