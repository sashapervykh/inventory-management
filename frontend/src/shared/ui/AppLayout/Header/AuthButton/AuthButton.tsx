import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";

export function AuthButton() {
  const { t } = useTranslation();
  return (
    <Link className="flex h-fit m-[auto_0px]">
      <div className="w-fit whitespace-nowrap text-[16px]">{t("logout")}</div>
    </Link>
  );
}
