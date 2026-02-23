import { useUser } from "../../../../entity/user/model/useUser";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { user } = useUser();
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
}
