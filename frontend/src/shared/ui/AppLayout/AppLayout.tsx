import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { AppFooter } from "./Footer/AppFooter";
import { AppHeader } from "./Header/AppHeader";

export function AppLayout() {
  return (
    <Layout className="flex">
      <AppHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </Layout>
  );
}
