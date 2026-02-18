import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";
import { ROUTES } from "../../shared/constants/routes";
import { HomePage } from "../../pages/Home/HomePage";
import { UserPage } from "../../pages/User/UserPage";
import { AdminPage } from "../../pages/Admin/AdminPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER} element={<UserPage />} />
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route path={ROUTES.INVENTORY} element={<UserPage />} />
          <Route path={ROUTES.ITEM} element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
