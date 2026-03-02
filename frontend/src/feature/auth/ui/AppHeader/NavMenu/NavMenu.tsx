import { Menu } from "antd";
import { getNavItems } from "./navItems";
import { useLocation } from "react-router-dom";
import { useUser } from "../../../../../entity/user/model/useUser";

export function NavMenu() {
  const { user } = useUser();
  const userType = user && user.type ? user.type : "none";
  const location = useLocation();
  const selectedItem = location.pathname.slice(1);
  return (
    <Menu
      className="w-auto justify-end bg-none"
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={[selectedItem]}
      items={getNavItems(userType)}
    />
  );
}
