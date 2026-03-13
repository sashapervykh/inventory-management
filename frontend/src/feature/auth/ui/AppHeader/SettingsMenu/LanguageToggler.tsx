import { Switch } from "antd";
import { SwitchConfig } from "./SwitchConfig";
import { useTranslation } from "react-i18next";

export function LanguageToggler() {
  const { i18n } = useTranslation();

  const onChange = () => {
    if (i18n.language === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };
  return (
    <SwitchConfig>
      <Switch
        checkedChildren={<span>РУ</span>}
        unCheckedChildren={<span>EN</span>}
        onChange={onChange}
      />
    </SwitchConfig>
  );
}
