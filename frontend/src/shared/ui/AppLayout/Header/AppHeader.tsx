import { HomeOutlined } from "@ant-design/icons";
import { Menu, Typography, type MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { navItems } from "./navItems";
import { ROUTES } from "../../../constants/routes";

const { Text } = Typography;

export function AppHeader() {
  return (
    <Header className="flex justify-center mt-4">
      <Text>INVENTO</Text>
      <Menu
        className="flex w-[75%] ml-auto mr-0"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[ROUTES.HOME]}
        items={navItems}
      />
    </Header>
  );
}
