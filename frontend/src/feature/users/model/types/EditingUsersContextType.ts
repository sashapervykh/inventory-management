import type { EditingUser } from "../../../define-editors/model/types/Editor";

export interface EditingUsersContextType {
  editingUsers: EditingUser[];
  setEditingUsers: (editingUsers: EditingUser[]) => void;
}
