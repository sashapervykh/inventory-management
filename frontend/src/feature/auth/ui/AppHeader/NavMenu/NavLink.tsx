import { Link } from "react-router-dom";
import { Button, ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";

export function NavLink({ page }: { page: string }) {
  const { t } = useTranslation();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: "#000000",
        },
      }}
    >
      <Link to={page}>
        <Button type="link">{t(page)}</Button>{" "}
      </Link>
    </ConfigProvider>
  );
}
