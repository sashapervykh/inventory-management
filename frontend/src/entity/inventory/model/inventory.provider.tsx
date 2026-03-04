import { useCallback, useEffect, useState } from "react";
import type { Inventory } from "./types/Inventory";
import type { InventoryContextType } from "./types/InventoryContextType";
import { InventoryContext } from "./inventory.context";
import { useParams } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export function InventoryProvider({ children }: Props) {
  const [inventory, setInventory] = useState<Inventory | null>(null);
  const { inventoryId } = useParams();
  if (!inventoryId) throw new Error("Inventory id was not provided");

  const getInventory = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/inventories/${inventoryId}`,
        {
          method: "GET",
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Error("Error when getting inventory");
      }
      console.log(response);
      const inventory = await response.json();
      setInventory(inventory);
    } catch (error) {
      console.log(error);
      console.error("Error when getting inventory");
    }
  }, []);

  useEffect(() => {
    getInventory();
  }, []);

  const value: InventoryContextType = {
    inventory,
    setInventory,
    getInventory,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
}
