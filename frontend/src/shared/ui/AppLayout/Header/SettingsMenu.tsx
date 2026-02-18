import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Menu, Space } from "antd";
import { ThemeToggler } from "./ThemeToggler";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "language", label: <ThemeToggler /> },
  { key: "theme", label: "theme" },
];

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

export function SettingsMenu() {
  return (
    <Dropdown menu={{ items }} placement="topLeft">
      <div className="bg-white ml-2.5 pr-2 pl-2 cursor-pointer">
        <SettingOutlined />
      </div>
    </Dropdown>
  );
}
