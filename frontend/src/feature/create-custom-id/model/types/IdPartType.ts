import type { ID_PARTS_TYPES } from "../../constants/idPartsTypes";

export type IdPartType = (typeof ID_PARTS_TYPES)[keyof typeof ID_PARTS_TYPES];
