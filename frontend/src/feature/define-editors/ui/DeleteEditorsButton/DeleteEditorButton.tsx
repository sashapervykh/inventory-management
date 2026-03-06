import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { Key } from "react";
import { useEditors } from "../../model/hooks/useEditors";

export function DeleteEditorsButton({
  usersToDelete,
}: {
  usersToDelete: Key[];
}) {
  const { deleteEditors } = useEditors();
  return (
    <Button
      type="primary"
      disabled={usersToDelete.length === 0}
      onClick={() => {
        deleteEditors(usersToDelete);
      }}
    >
      <DeleteOutlined />
    </Button>
  );
}
