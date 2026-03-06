import Text from "antd/es/typography";
import { AccessControls } from "./AccessControls";
import { AccessTable } from "../../../../feature/define-editors/ui/AccessTable/AccessTable";
import { useState, type Key } from "react";

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
