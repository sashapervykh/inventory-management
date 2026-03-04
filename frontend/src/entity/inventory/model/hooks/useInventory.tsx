import { useCallback, useEffect, useState } from "react";
import type { Inventory } from "../types/Inventory";
import { useParams } from "react-router-dom";

export function useInventory() {
  const [inventory, setInventory] = useState<Inventory | undefined>(undefined);
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

  return { inventory, getInventory };
}
