import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../../../entity/user/model/useUser";

export function AuthButton() {
  const { user } = useUser();
  const { t } = useTranslation();
  return user ? (
    <Link className="flex h-fit m-[auto_0px]">
      <div className="w-fit whitespace-nowrap text-[16px]">{t("logout")}</div>
    </Link>
  ) : (
    <Link className="flex h-fit m-[auto_0px]">
      <div className="w-fit whitespace-nowrap text-[16px]">Log In</div>
    </Link>
  );
}
