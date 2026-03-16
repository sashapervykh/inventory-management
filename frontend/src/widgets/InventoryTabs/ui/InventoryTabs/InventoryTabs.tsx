import { Tabs } from "antd";
import { getTabsList } from "./TabsList";
import type { Inventory } from "../../../../entity/inventory/model/types/Inventory";

export function InventoryTabs({ inventory }: { inventory: Inventory }) {
  const tabsList = getTabsList(inventory);
  return <Tabs defaultActiveKey="settings" items={tabsList} size="large" />;
}
