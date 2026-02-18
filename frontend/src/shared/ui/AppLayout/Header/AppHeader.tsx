import { Menu, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { navItems } from "./navItems";
import { ROUTES } from "../../../constants/routes";
import { useLocation } from "react-router-dom";

const { Text } = Typography;

export function AppHeader() {
  const location = useLocation();
  const selectedItem = location.pathname.slice(1);
  return (
    <Header className="flex justify-center mt-4">
      <Text>INVENTO</Text>
      <Menu
        className="min-w-[30%] justify-end"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[selectedItem]}
        items={navItems}
      />
    </Header>
  );
}
