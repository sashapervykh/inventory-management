import { Tabs } from "antd";
import { tabsList } from "./TabsList";

export function InventoryTabs() {
  return <Tabs defaultActiveKey="items" items={tabsList} size="large" />;
}
