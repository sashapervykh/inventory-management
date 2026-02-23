import { Button, Checkbox, Form, Input, type FormProps } from "antd";

const { TextArea } = Input;
type FieldType = {
  title: string;
  description: string;
  isPublic?: boolean;
};

export function InventoryForm() {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      console.log(values);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}inventories`,
        { method: "POST", credentials: "include" },
      );
      const inventory = await response.json();
      console.log(inventory);
    } catch {
      console.error("Error when creating");
    }
  };
  return (
    <Form onFinish={onFinish}>
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
        Create
      </Button>
    </Form>
  );
}
