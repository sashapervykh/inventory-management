import { Tabs } from "antd";
import { getTabsList } from "./TabsList";
import type { Inventory } from "../../../../entity/inventory/model/types/Inventory";

export function InventoryTabs({ inventory }: { inventory: Inventory }) {
  const tabsList = getTabsList(inventory);
  console.log(inventory);
  return <Tabs defaultActiveKey="items" items={tabsList} size="large" />;
}
