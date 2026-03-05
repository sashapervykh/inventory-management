import { useState } from "react";
import type { Inventory } from "../../../entity/inventory/model/types/Inventory";
import type { InventoryContextType } from "../../../entity/inventory/model/types/InventoryContextType";
import { InventoryContext } from "../../../entity/inventory/model/inventory.context";

interface Props {
  children: React.ReactNode;
}

export function InventoryProvider({ children }: Props) {
  const [inventory, setInventory] = useState<Inventory | null>(null);

  const value: InventoryContextType = {
    inventory,
    setInventory,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
}
