import { Form, Select } from "antd";
import { partsOptions } from "./partsOptions";
import type { IdPartType } from "../../model/types/IdPartType";

export function PartsSelector({
  name,
  type,
  onChange,
}: {
  name: number;
  type: IdPartType;
  onChange: (newType: IdPartType) => void;
}) {
  return (
    <Form.Item name={[name, `${name}-1`]} initialValue={type}>
      <Select value={type} onChange={onChange} options={partsOptions} />
    </Form.Item>
  );
}
