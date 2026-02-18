import { SettingsMenu } from "./SettingsMenu/SettingsMenu";
import { NavMenu } from "./NavMenu/NavMenu";
import { Logo } from "./Logo/Logo";
import { AppSearch } from "./AppSearch/AppSearch";
import { AuthButton } from "./AuthButton/AuthButton";
import { ConfigProvider, Layout } from "antd";

const { Header } = Layout;

export function AppHeader() {
  return (
    <Header className="flex mt-4">
      <Logo />
      <AppSearch />
      <NavMenu />
      <SettingsMenu />
      <AuthButton />
    </Header>
  );
}
