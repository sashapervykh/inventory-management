import Title from "antd/es/typography/Title";
import { useInventory } from "../../../../entity/inventory/model/hooks/useInventory";
import { InventoryTabs } from "../InventoryTabs/InventoryTabs";

export function InventoryView({ inventoryId }: { inventoryId: string }) {
  const { inventory } = useInventory(inventoryId);

  return (
    <div className="flex flex-col w-full p-5">
      <Title>{inventory?.title}</Title>
      <InventoryTabs />
    </div>
  );
}
