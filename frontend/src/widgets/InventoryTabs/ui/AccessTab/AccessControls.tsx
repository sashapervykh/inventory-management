import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { AutoComplete, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAllUsers } from "../../../../feature/users/model/hooks/useAllUsers";
import { getAccessOptions } from "../../../../feature/users/lib/getAccessOptions";
import { useUsersAccess } from "../../../../feature/users/model/hooks/useUsersAccess";

export function AccessControls() {
  const { users, getUsers } = useAllUsers();
  const { updateUsersAccess } = useUsersAccess();
  const options = getAccessOptions(users);

  return (
    <div className="flex gap-2">
      <AutoComplete
        className="w-75"
        onChange={(value) => {
          getUsers(value);
        }}
        onSelect={(value) => {
          updateUsersAccess(1, value);
        }}
        options={options}
      />
      <Button type="primary">
        <DeleteOutlined />
      </Button>
      <ToggleAccessButton isPublic={false} />
    </div>
  );
}
