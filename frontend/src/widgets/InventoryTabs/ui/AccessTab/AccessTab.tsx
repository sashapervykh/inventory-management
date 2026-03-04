import Text from "antd/es/typography";
import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { AutoComplete } from "antd";

export function AccessTab({ isPublic }: { isPublic: boolean }) {
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
        // showSearch={{ onSearch: handleSearch }}
        placeholder="input here"
        // options={options}
      />
      <ToggleAccessButton isPublic={isPublic} />
    </>
  );
}
