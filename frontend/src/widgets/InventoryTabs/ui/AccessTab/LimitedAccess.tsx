import Text from "antd/es/typography";
import { AccessControls } from "./AccessControls";

export function LimitedAccess() {
  return (
    <>
      <Text>
        You can choose who can change your repository or make it public
      </Text>
      <AccessControls />
    </>
  );
}
