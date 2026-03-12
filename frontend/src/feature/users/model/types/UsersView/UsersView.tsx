import { useState, type Key } from "react";
import { UsersTable } from "../UsersTable/UsersTable";

export function UsersView() {
  const [selectedUsersKeys, setSelectedUsersKeys] = useState<Key[]>([]);
  return (
    <div>
      <UsersTable
        selectedUsersKeys={selectedUsersKeys}
        setSelectedUsersKeys={setSelectedUsersKeys}
      />
    </div>
  );
}
