import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useInventory } from "../../../../entity/inventory/model/hooks/useInventory";

export function useToggleAccess() {
  const { getInventory } = useInventory();
  const { inventoryId } = useParams();
  if (!inventoryId) throw new Error("Inventory id was not provided");

  const updateInventoryAccess = useCallback(async (isPublic: boolean) => {
    try {
      const body = { isPublic };
      console.log(body);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/inventories/${inventoryId}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );
      if (!response.ok) {
        throw new Error("Error when updating inventory");
      }
      getInventory();
    } catch (error) {
      console.log(error);
      console.error("Error when updating inventory");
    }
  }, []);

  return { updateInventoryAccess };
}
