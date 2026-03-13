import { AppLayout } from "../../../../../shared/ui/AppLayout/AppLayout";
import { AuthHeader } from "../../AppHeader/AuthHeader";
import { UserLoader } from "./UserLoader";

export function AuthLayout() {
  return (
    <UserLoader>
      <AppLayout header={<AuthHeader />} />
    </UserLoader>
  );
}
