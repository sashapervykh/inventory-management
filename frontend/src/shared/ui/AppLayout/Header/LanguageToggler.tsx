import { Switch } from "antd";
import { SwitchConfig } from "./SettingsMenu/SwitchConfig";

export function LanguageToggler() {
  return (
    <SwitchConfig>
      <Switch
        checkedChildren={<span>RU</span>}
        unCheckedChildren={<span>EN</span>}
      />
    </SwitchConfig>
  );
}
