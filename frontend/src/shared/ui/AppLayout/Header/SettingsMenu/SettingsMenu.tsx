import { SettingOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useState } from "react";
import { settings } from "./settings";

export function SettingsMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChange = (
    open: boolean,
    info: { source: "trigger" | "menu" },
  ) => {
    if (info.source === "trigger") {
      setOpen(open);
    }
  };

  return (
    <Dropdown
      menu={{ items: settings }}
      open={open}
      onOpenChange={handleOpenChange}
      placement="topLeft"
    >
      <div className="ml-2.5 pr-2 pl-2 cursor-pointer">
        <SettingOutlined />
      </div>
    </Dropdown>
  );
}
