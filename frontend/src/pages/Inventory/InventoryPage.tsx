import { useParams } from "react-router-dom";
import { InventoryView } from "../../widgets/InventoryTabs/ui/InventoryView/InventoryView";

export function InventoryPage() {
  const { inventoryId } = useParams();
  if (!inventoryId) return "You need to specify inventory in url";
  return <InventoryView inventoryId={inventoryId} />;
}
