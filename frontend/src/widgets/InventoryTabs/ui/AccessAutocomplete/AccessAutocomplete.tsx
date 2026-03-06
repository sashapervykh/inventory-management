import { useState } from "react";
import { AutoComplete } from "antd";
import { useAllUsers } from "../../../../feature/users/model/hooks/useAllUsers";
import { useEditors } from "../../../../feature/define-editors/model/hooks/useEditors";
import { getAccessOptions } from "../../lib/getAccessOptions";
import type { EditorOption } from "../../models/types/EditorOption";

export function AccessAutocomplete() {
  const [value, setValue] = useState("");
  const { users, getUsers } = useAllUsers();
  const { updateEditors } = useEditors();
  const options = getAccessOptions(users);

  return (
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
      placeholder="Enter name or email"
    />
  );
}
