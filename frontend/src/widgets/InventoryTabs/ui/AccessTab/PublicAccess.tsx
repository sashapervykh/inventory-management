import Text from "antd/es/typography";
import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";

export function PublicAccess() {
  return (
    <>
      <Text>This inventory is currently public.</Text>
      <Text>Do you want to limit access to the inventory?</Text>
      <ToggleAccessButton isPublic={true} />
    </>
  );
}
