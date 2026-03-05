import type { EditingUser } from "./EditingUser";

export interface EditingUsersContextType {
  editingUsers: EditingUser[];
  setEditingUsers: (editingUsers: EditingUser[]) => void;
}
