import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";
import { HomePage } from "../../pages/Home/HomePage";
import { UserPage } from "../../pages/User/UserPage";
import { AdminPage } from "../../pages/Admin/AdminPage";
import { RegisterPage } from "../../pages/Auth/RegisterPage";
import { AuthLayout } from "../../feature/auth/ui/AuthLayout/ui/AuthLayout";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { ProtectedRoute } from "../../feature/auth/ui/ProtectedRoute/ProtectedRoute";
import { PublicOnlyRoute } from "../../feature/auth/ui/PublicRoute/PublicRoute";
import { CreationPage } from "../../pages/CreationPage/CreationPage";
import { InventoryPage } from "../../pages/Inventory/InventoryPage";
import { LoginPage } from "../../pages/Auth/LoginPage";
import { AdminOnlyRoute } from "../../feature/auth/ui/AdminOnlyRoute/AdminOnlyRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.USER} element={<UserPage />} />
            <Route path={ROUTES.CREATE} element={<CreationPage />} />
          </Route>
          <Route element={<AdminOnlyRoute />}>
            <Route path={ROUTES.ADMIN} element={<AdminPage />} />
          </Route>
          <Route element={<PublicOnlyRoute />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          </Route>
          <Route
            path={`${ROUTES.INVENTORIES}/:inventoryId`}
            element={<InventoryPage />}
          />
          <Route path={ROUTES.HOME} element={<HomePage />} />

          <Route path={ROUTES.ITEM} element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
