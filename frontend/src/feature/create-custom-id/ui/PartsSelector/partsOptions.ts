import { ID_PARTS_TYPES } from "../../constants/idPartsTypes";

export const partsOptions = Object.values(ID_PARTS_TYPES).map((elem) => ({
  value: elem,
  label: elem,
}));
