import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Layout>
      <header>HEADER</header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </Layout>
  );
}
