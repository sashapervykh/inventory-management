import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

export function NavLink({ page }: { page: string }) {
  const { t } = useTranslation();
  return (
    <Link to={page}>
      {" "}
      <Typography.Link>{t(page)}</Typography.Link>{" "}
    </Link>
  );
}
