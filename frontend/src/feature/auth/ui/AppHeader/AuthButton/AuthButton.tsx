import { useUser } from "../../../../../entity/user/model/useUser";
import { LogoutButton } from "./LogoutButton";
import { LoginLink } from "./LoginLink";

export function AuthButton() {
  const { user } = useUser();
  return user ? <LogoutButton /> : <LoginLink />;
}
