import Search from "antd/es/input/Search";
import { useTranslation } from "react-i18next";

export function AppSearch() {
  const { t } = useTranslation();
  return (
    <Search
      className="flex max-h-10 m-auto"
      placeholder={t("searchPlaceholder")}
      size="large"
    />
  );
}
