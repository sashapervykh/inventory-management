import { SettingsMenu } from "./SettingsMenu/SettingsMenu";
import { NavMenu } from "./NavMenu/NavMenu";
import { Logo } from "./Logo/Logo";
import { AppSearch } from "./AppSearch/AppSearch";
import { AuthButton } from "./AuthButton/AuthButton";
import { Layout } from "antd";

const { Header } = Layout;

export function AuthHeader() {
  return (
    <Header className="grid mt-4 grid-cols-[auto_minmax(100px,35%)_minmax(100px,35%)_auto_minmax(60px,auto)]">
      <Logo />
      <AppSearch />
      <NavMenu />
      <SettingsMenu />
      <AuthButton />
    </Header>
  );
}
