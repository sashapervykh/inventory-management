import { Form, Select } from "antd";
import { examplePartOptions } from "../../constants/idPartsOptions/examplePartOptions";
import type { IdPartType } from "../../model/types/IdPartType";

export function PartsValueSelect({
  name,
  type,
}: {
  name: number;
  type: IdPartType;
}) {
  const options = examplePartOptions[type];
  return (
    <Form.Item name={[name, `${name}-2`]} initialValue={options[0].value}>
      <Select options={options} defaultValue={options[0].value} />
    </Form.Item>
  );
}
