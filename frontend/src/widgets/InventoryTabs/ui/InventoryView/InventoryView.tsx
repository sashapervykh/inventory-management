import Title from "antd/es/typography/Title";
import { useInventory } from "../../../../entity/inventory/model/hooks/useInventory";
import { InventoryTabs } from "../InventoryTabs/InventoryTabs";

export function InventoryView() {
  const { inventory } = useInventory();
  if (!inventory) return "Inventory data was not received!";

  return (
    <div className="flex flex-col w-full p-5">
      <Title>{inventory?.title}</Title>
      <InventoryTabs inventory={inventory} />
    </div>
  );
}
