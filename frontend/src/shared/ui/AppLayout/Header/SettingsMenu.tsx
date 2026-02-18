import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "settings",
    label: <SettingOutlined />,
    popupOffset: [-76, 50],
    children: [
      { key: "language", label: "language" },
      { key: "theme", label: "theme" },
    ],
  },
];

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

export function SettingsMenu() {
  return (
    <div className="flex flex-col h-full justify-center ml-[30px]">
      <Menu
        className="h-fit"
        onClick={onClick}
        expandIcon={null}
        mode="vertical"
        items={items}
      />
    </div>
  );
}
