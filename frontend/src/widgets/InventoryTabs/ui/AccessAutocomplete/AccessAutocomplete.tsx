import { useState } from "react";
import { AutoComplete } from "antd";
import { useAllUsers } from "../../../../feature/users/model/hooks/useAllUsers";
import { getAccessOptions } from "../../lib/getAccessOptions";
import type { EditorOption } from "../../models/types/EditorOption";
import { useEditors } from "../../../../entity/editors/model/hooks/useEditors";

export function AccessAutocomplete() {
  const [value, setValue] = useState("");
  const { getUsers } = useAllUsers();
  const { editors, updateEditors } = useEditors();
  const options = getAccessOptions(editors);

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
