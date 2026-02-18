import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";

export function NavLink({ page }: { page: string }) {
  const { t } = useTranslation();
  return <Link href={`/${page}`}>{t(page)}</Link>;
}
