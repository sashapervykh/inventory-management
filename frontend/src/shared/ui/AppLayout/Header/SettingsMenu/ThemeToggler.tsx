import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { SwitchConfig } from "./SwitchConfig";

export function ThemeToggler() {
  return (
    <SwitchConfig>
      <Switch
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </SwitchConfig>
  );
}
