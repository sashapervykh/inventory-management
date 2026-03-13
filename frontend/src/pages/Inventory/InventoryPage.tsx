import { InventoryProvider } from "../../entity/inventory/model/inventory.provider";
import { InventoryView } from "../../widgets/InventoryTabs/ui/InventoryView/InventoryView";

export function InventoryPage() {
  return (
    <InventoryProvider>
      <InventoryView />
    </InventoryProvider>
  );
}
