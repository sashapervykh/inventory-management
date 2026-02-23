import { Tabs } from "antd";
import { TabsInfo } from "./TabsInfo";

export function NewInventoryTabs() {
  return (
    <div className="w-full">
      <Tabs
        className="flex max-w-full w-full"
        centered={true}
        defaultActiveKey="1"
        tabPlacement="top"
        items={TabsInfo}
      />
    </div>
  );
}
