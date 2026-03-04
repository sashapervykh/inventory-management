import type { Inventory } from "./Inventory";

export interface InventoryContextType {
  inventory: Inventory | null;
  setInventory: (inventory: Inventory | null) => void;
  getInventory: () => Promise<void>;
}
