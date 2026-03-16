import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { SignUpLink } from "./SignUpLink";

export function LoginLink() {
  const location = useLocation();
  const pathname = location.pathname;
  const { t } = useTranslation();
  if (pathname === "/login") return <SignUpLink />;
  return (
    <Link to="/login" className="flex h-fit m-[auto_0px]">
      <Button type="link">
        <div className="w-fit whitespace-nowrap text-[16px]">{t("login")}</div>
      </Button>
    </Link>
  );
}
