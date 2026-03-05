import Text from "antd/es/typography";
import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { AutoComplete } from "antd";
import { useAllUsers } from "../../../../feature/users/model/hooks/useAllUsers";
import { getAccessOptions } from "../../../../feature/users/lib/getAccessOptions";

export function AccessTab({ isPublic }: { isPublic: boolean }) {
  const { users } = useAllUsers();
  const options = getAccessOptions(users);
  if (isPublic) {
    return (
      <>
        <Text>This inventory is currently public.</Text>
        <Text>Do you want to limit access to the inventory?</Text>
        <ToggleAccessButton isPublic={isPublic} />
      </>
    );
  }
  return (
    <>
      <Text>
        You can choose who can change your repository or make it public
      </Text>
      <AutoComplete
        className="w-[300px]"
        // showSearch={{ onSearch: handleSearch }}
        placeholder="input here"
        options={options}
      />
      <ToggleAccessButton isPublic={isPublic} />
    </>
  );
}
