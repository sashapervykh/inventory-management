import { useContext } from "react";
import { EditingUsersContext } from "../context/editingUsers.context";

export function useEditingUsers() {
  const context = useContext(EditingUsersContext);
  if (!context) {
    throw new Error(
      "useEditingUsers must be used within a EditingUsersProvider",
    );
  }
  return context;
}
