import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { AppFooter } from "./Footer/AppFooter";

export function AppLayout() {
  return (
    <Layout className="flex">
      <header>HEADER</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </Layout>
  );
}
