import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../entity/user/model/useUser";

export function PublicOnlyRoute() {
  const { user } = useUser();
  if (user) return <Navigate to="/home" />;
  return <Outlet />;
}
