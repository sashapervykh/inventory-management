import { Form, Select } from "antd";
import { partsOptions } from "./partsOptions";
import type { IdPartType } from "../../model/types/IdPartType";

export function PartsSelector({
  name,
  isDragging,
  type,
}: {
  name: number;
  isDragging: boolean;
  type: IdPartType;
}) {
  return (
    <Form.Item
      name={[name, `${name}-1`]}
      data-shadow={isDragging || undefined}
      initialValue={type}
    >
      <Select defaultValue={type} options={partsOptions} />
    </Form.Item>
  );
}
