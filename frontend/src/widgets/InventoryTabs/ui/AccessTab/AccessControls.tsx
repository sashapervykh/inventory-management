import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { AutoComplete, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAllUsers } from "../../../../feature/users/model/hooks/useAllUsers";
import { getAccessOptions } from "../../../../feature/users/lib/getAccessOptions";
import { useEditors } from "../../../../feature/define-editors/model/hooks/useEditors";
import type { EditorOption } from "../../models/types/EditorOprion";
import { useState } from "react";

export function AccessControls() {
  const [value, setValue] = useState("");
  const { users, getUsers } = useAllUsers();
  const { updateEditors } = useEditors();
  const options = getAccessOptions(users);

  return (
    <div className="flex gap-2">
      <AutoComplete<string, EditorOption>
        value={value}
        className="w-75"
        onChange={(value) => {
          setValue(value);
          getUsers(value);
        }}
        onSelect={(_value, option) => {
          updateEditors([{ id: option.id }]);
          setValue("");
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
