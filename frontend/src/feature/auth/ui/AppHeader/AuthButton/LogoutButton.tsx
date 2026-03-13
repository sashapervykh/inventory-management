import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useLogout } from "../../../model/hooks/useLogout";

export function LogoutButton() {
  const { loading, logout } = useLogout();
  const { t } = useTranslation();
  return (
    <Button
      className="flex h-fit m-[auto_0px] w-fit whitespace-nowrap"
      size="large"
      type="link"
      onClick={logout}
      disabled={loading}
    >
      {t("logout")}
    </Button>
  );
}
