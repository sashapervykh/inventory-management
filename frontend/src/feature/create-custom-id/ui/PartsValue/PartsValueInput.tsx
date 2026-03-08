import { Form, Input } from "antd";
import { DEFAULT_FIXED_VALUE } from "../../constants/defaultFixedValue";

export function PartsValueInput({ name }: { name: number }) {
  return (
    <Form.Item name={[name, `${name}-2`]} initialValue={DEFAULT_FIXED_VALUE}>
      <Input defaultValue={DEFAULT_FIXED_VALUE} />
    </Form.Item>
  );
}
