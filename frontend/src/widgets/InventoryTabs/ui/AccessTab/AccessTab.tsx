import { PublicAccess } from "./PublicAccess";
import { LimitedAccess } from "./LimitedAccess";
import { EditingUsersProvider } from "../../../../feature/users/model/provider/editingUsers.provider";

export function AccessTab({ isPublic }: { isPublic: boolean }) {
  if (isPublic) {
    return <PublicAccess />;
  }
  return (
    <EditingUsersProvider>
      <LimitedAccess />
    </EditingUsersProvider>
  );
}
