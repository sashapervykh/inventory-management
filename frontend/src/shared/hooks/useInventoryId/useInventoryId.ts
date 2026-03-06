import { useParams } from "react-router-dom";

export function useInventoryId() {
  const { inventoryId } = useParams();
  if (!inventoryId) throw new Error("Inventory id was not provided");
  return { inventoryId };
}
