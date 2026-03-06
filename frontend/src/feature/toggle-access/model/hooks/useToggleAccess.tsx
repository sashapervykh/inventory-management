import { useCallback } from "react";
import { useInventory } from "../../../../entity/inventory/model/hooks/useInventory";
import { useInventoryId } from "../../../../shared/hooks/useInventoryId/useInventoryId";
import { sendInventoryAccessRequest } from "../../api/sendInventoryAccessRequest";

export function useToggleAccess() {
  const { getInventory } = useInventory();
  const { inventoryId } = useInventoryId();

  const updateInventoryAccess = async (isPublic: boolean) => {
    try {
      await sendInventoryAccessRequest({ isPublic, inventoryId });
      getInventory();
    } catch (error) {
      console.log(error);
      console.error("Error when updating inventory");
    }
  };

  return { updateInventoryAccess };
}
