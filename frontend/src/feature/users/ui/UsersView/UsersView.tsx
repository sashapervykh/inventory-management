import { useState, type Key } from "react";
import { UsersTable } from "../UsersTable/UsersTable";
import { UserControls } from "../UsersControls/UsersControls";

export function UsersView() {
  const [selectedUsersKeys, setSelectedUsersKeys] = useState<Key[]>([]);
  return (
    <div>
      <UserControls
        selectedUsersKeys={selectedUsersKeys}
        setSelectedUsersKeys={setSelectedUsersKeys}
      />
      <UsersTable
        selectedUsersKeys={selectedUsersKeys}
        setSelectedUsersKeys={setSelectedUsersKeys}
      />
    </div>
  );
}
