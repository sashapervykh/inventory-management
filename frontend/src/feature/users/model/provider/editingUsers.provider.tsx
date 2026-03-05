import { useState } from "react";
import type { EditingUser } from "../types/EditingUser";
import type { EditingUsersContextType } from "../types/EditingUsersContextType";
import { EditingUsersContext } from "../context/editingUsers.context";

interface Props {
  children: React.ReactNode;
}

export function EditingUsersProvider({ children }: Props) {
  const [editingUsers, setEditingUsers] = useState<EditingUser[]>([]);

  const value: EditingUsersContextType = {
    editingUsers,
    setEditingUsers,
  };

  return (
    <EditingUsersContext.Provider value={value}>
      {children}
    </EditingUsersContext.Provider>
  );
}
