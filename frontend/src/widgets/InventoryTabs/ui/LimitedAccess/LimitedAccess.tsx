import Text from "antd/es/typography";
import { AccessControls } from "./AccessControls";

import { useState, type Key } from "react";
import { AccessTable } from "../../../../entity/editors/ui/AccessTable/AccessTable";

export function LimitedAccess() {
  const [editorsToDelete, setEditorsToDelete] = useState<Key[]>([]);
  return (
    <>
      <Text>
        You can choose who can change your repository or make it public
      </Text>
      <AccessControls
        editorsToDelete={editorsToDelete}
        setEditorsToDelete={setEditorsToDelete}
      />
      <AccessTable
        editorsToDelete={editorsToDelete}
        setEditorsToDelete={setEditorsToDelete}
      />
    </>
  );
}
