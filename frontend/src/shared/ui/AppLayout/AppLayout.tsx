import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { AppFooter } from "./Footer/AppFooter";
import { AppHeader } from "./Header/AppHeader";
import { ConfigProvider, theme } from "antd";

export function AppLayout() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        components: {
          Layout: { headerBg: "#FFFFFF" },
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
