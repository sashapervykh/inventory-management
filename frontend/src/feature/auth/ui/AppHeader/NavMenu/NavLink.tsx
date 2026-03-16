import { Link } from "react-router-dom";
import { Button, ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../../shared/hooks/useTheme/useTheme";

export function NavLink({ page }: { page: string }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      }}
    >
      <Link to={page}>
        <Button type="link">{t(page)}</Button>{" "}
      </Link>
    </ConfigProvider>
  );
}
