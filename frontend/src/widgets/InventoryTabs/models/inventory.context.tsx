import { createContext } from "react";
import type { InventoryContextType } from "../../../entity/inventory/model/types/InventoryContextType";

export const UserContext = createContext<InventoryContextType | undefined>(
  undefined,
);
