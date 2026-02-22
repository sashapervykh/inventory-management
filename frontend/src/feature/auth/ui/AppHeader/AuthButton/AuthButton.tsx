import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../../../entity/user/model/useUser";
import { LogoutButton } from "./LogoutButton";

export function AuthButton() {
  const { user } = useUser();
  const { t } = useTranslation();
  return user ? (
    <LogoutButton />
  ) : (
    <Link className="flex h-fit m-[auto_0px]" href="/login">
      <div className="w-fit whitespace-nowrap text-[16px]">{t("login")}</div>
    </Link>
  );
}
