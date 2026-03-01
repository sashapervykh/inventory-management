import { Button, Checkbox, Form, Input, type FormProps } from "antd";
import { useCreateInventory } from "../../model/useCreateInventory";

const { TextArea } = Input;
type FieldType = {
  title: string;
  description: string;
  isPublic?: boolean;
};

export function InventoryForm() {
  const { createInventory } = useCreateInventory();

  return (
    <Form onFinish={createInventory}>
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item<FieldType>
        label="Is public?"
        name="isPublic"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>
      <Button type="primary" className="w-fit" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
}
