import type { TabsProps } from "antd";
import { SettingsTab } from "../SettingsTab/SettingsTab";
import type { Inventory } from "../../../../entity/inventory/model/types/Inventory";

export const getTabsList: (inventory: Inventory) => TabsProps["items"] = (
  inventory: Inventory,
) => [
  {
    key: "items",
    label: "Items",
    children: "This feature is to be implemented later",
  },
  {
    key: "discussion",
    label: "Discussion",
    children: "This feature is to be implemented later",
  },
  {
    key: "settings",
    label: "Settings",
    children: (
      <SettingsTab
        title={inventory.title}
        description={inventory.description}
        category={inventory.category}
        tags={inventory.tags}
      />
    ),
  },
  {
    key: "custom id",
    label: "Custom ID",
    children: "This feature is to be implemented later",
  },
  {
    key: "access",
    label: "Access",
    children: "This feature is to be implemented later",
  },
  {
    key: "custom fields",
    label: "Custom Fields",
    children: "This feature is to be implemented later",
  },
  {
    key: "statistics",
    label: "Statistics",
    children: "This feature is to be implemented later",
  },
];
