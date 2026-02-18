import { Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { NavMenu } from "./NavMenu";
import { SettingsMenu } from "./SettingsMenu";

const { Text } = Typography;

export function AppHeader() {
  return (
    <Header className="flex justify-center mt-4">
      <Text>INVENTO</Text>
      <NavMenu />
      <SettingsMenu />
    </Header>
  );
}
