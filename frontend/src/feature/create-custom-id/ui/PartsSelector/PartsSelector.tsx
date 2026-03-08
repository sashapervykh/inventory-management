import { Form, Select } from "antd";
import { partsOptions } from "./partsOptions";
import type { IdPartType } from "../../model/types/IdPartType";
import type { Dispatch, SetStateAction } from "react";

export function PartsSelector({
  name,
  type,
  onChange,
}: {
  name: number;
  type: IdPartType;
  onChange: Dispatch<SetStateAction<IdPartType>>;
}) {
  return (
    <Form.Item name={[name, `${name}-1`]} initialValue={type}>
      <Select
        defaultValue={type}
        value={type}
        onChange={onChange}
        options={partsOptions}
      />
    </Form.Item>
  );
}
