import { Form, Input } from "antd";
import { DEFAULT_FIXED_VALUE } from "../../constants/idPartsValues/defaultFixedValue";

export function PartsValueInput({ name }: { name: number }) {
  return (
    <Form.Item name={[name, `value`]} initialValue={DEFAULT_FIXED_VALUE}>
      <Input />
    </Form.Item>
  );
}
