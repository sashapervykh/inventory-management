import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { SwitchConfig } from "./SwitchConfig";
import { useTheme } from "../../../../../shared/hooks/useTheme/useTheme";
import { THEMES } from "../../../../../shared/constants/themes";

export function ThemeToggler() {
  const { setTheme } = useTheme();
  const onChange = () => {
    setTheme((t) => (t === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };
  return (
    <SwitchConfig>
      <Switch
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
        onChange={onChange}
      />
    </SwitchConfig>
  );
}
