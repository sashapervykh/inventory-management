import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../../../entity/user/model/useUser";
import { LogoutButton } from "./LogoutButton";
import { LoginLink } from "./LoginLink";

export function AuthButton() {
  const { user } = useUser();
  const { t } = useTranslation();
  return user ? <LogoutButton /> : <LoginLink />;
}
