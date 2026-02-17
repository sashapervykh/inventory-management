import { HomeOutlined } from "@ant-design/icons";
import { Menu, Typography, type MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";

const { Text } = Typography;

const items1: MenuProps["items"] = ["HOME", "USER", "ADMIN"].map((key) => ({
  key,
  label: `${key}`,
  icon: <HomeOutlined />,
}));

export function AppHeader() {
  return (
    <Header className="flex justify-center mt-4">
      <Text>INVENTO</Text>
      <Menu
        className="flex w-[75%] ml-auto mr-0"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  );
}
