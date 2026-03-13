import { useUser } from "../../../../entity/user/model/useUser";
import { Navigate, Outlet } from "react-router-dom";

export function AdminOnlyRoute() {
  const { user } = useUser();
  if (user?.type !== "admin") return <Navigate to="/home" />;
  return <Outlet />;
}
