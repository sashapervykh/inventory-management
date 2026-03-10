import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEditors } from "../../model/hooks/useEditors";
import type { EditorsToDelete } from "../../model/types/EditorsToDelete";

export function DeleteEditorsButton({
  editorsToDelete,
  setEditorsToDelete,
}: EditorsToDelete) {
  const { deleteEditors } = useEditors();
  return (
    <Button
      type="primary"
      disabled={editorsToDelete.length === 0}
      onClick={() => {
        deleteEditors(editorsToDelete);
        setEditorsToDelete([]);
      }}
    >
      <DeleteOutlined />
    </Button>
  );
}
