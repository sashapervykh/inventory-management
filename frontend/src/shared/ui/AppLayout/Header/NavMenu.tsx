import { Menu } from "antd";
import { navItems } from "./navItems";
import { useLocation } from "react-router-dom";

export function NavMenu() {
  const location = useLocation();
  const selectedItem = location.pathname.slice(1);
  return (
    <Menu
      className="min-w-[30%] justify-end"
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={[selectedItem]}
      items={navItems}
    />
  );
}
