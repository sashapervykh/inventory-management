import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { AppFooter } from "./Footer/AppFooter";
import { AppHeader } from "./Header/AppHeader";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "../../hooks/useTheme/useTheme";
import { THEMES } from "../../constants/themes";

export function AppLayout() {
  const { theme: appTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm:
          appTheme === THEMES.DARK
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        components: {
          Layout: {
            headerBg: appTheme === THEMES.DARK ? "rgb(20, 20, 20)" : "#FFFFFF",
            colorBgLayout: appTheme === THEMES.DARK ? "#000000" : "#FFFFFF",
          },
        },
      }}
    >
      <Layout className="flex">
        <AppHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <AppFooter />
      </Layout>
    </ConfigProvider>
  );
}
