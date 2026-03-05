import { useEditingUsers } from "../../../../feature/users/model/hooks/useEditingUsers";

export function AccessTable() {
  const { editingUsers } = useEditingUsers();
  console.log(editingUsers);
  return <div>{editingUsers.map((user) => user.fullName)}</div>;
}
