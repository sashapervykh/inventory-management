import { useEditingUsers } from "../../../../feature/users/model/hooks/useEditingUsers";

export function AccessTable() {
  const { editingUsers } = useEditingUsers();
  return <div>{editingUsers.map((user) => user.name)}</div>;
}
