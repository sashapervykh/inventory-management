import Text from "antd/es/typography";
import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { AutoComplete, Button } from "antd";
import { DeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import { useAllUsers } from "../../../../feature/users/model/hooks/useAllUsers";
import { getAccessOptions } from "../../../../feature/users/lib/getAccessOptions";

export function LimitedAccess() {
  const { users, getUsers } = useAllUsers();
  const options = getAccessOptions(users);

  return (
    <>
      <Text>
        You can choose who can change your repository or make it public
      </Text>
      <AutoComplete
        className="w-75"
        onChange={(value) => {
          getUsers(value);
        }}
        showSearch={{ onSearch: () => console.log("search") }}
        options={options}
      />
      <Button type="primary">
        <UserAddOutlined />
      </Button>
      <Button type="primary">
        <DeleteOutlined />
      </Button>
      <ToggleAccessButton isPublic={isPublic} />
    </>
  );
}
