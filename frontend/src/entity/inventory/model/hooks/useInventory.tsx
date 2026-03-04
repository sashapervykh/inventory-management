import { useEffect, useState } from "react";
import type { Inventory } from "../types/Inventory";

export function useInventory(inventoryId: string) {
  const [inventory, setInventory] = useState<Inventory | undefined>(undefined);

  useEffect(() => {
    const getInventory = async (inventoryId: string) => {
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
    };

    getInventory(inventoryId);
  }, []);

  return { inventory };
}
