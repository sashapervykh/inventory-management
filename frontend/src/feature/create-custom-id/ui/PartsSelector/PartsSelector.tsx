import { Form, Select } from "antd";
import { partsOptions } from "./partsOptions";
import type { IdPartType } from "../../model/types/IdPartType";

export function PartsSelector({
  name,
  type,
}: {
  name: number;
  type: IdPartType;
}) {
  return (
    <Form.Item name={[name, `${name}-1`]} initialValue={type}>
      <Select defaultValue={type} options={partsOptions} />
    </Form.Item>
  );
}
