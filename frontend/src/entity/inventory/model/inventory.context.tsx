import { createContext } from "react";
import type { InventoryContextType } from "./types/InventoryContextType";

export const InventoryContext = createContext<InventoryContextType | undefined>(
  undefined,
);
