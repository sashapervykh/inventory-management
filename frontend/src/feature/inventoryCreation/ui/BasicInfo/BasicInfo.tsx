import { Checkbox, Form, Input } from "antd";

const { TextArea } = Input;
type FieldType = {
  title: string;
  description: string;
  isPublic?: boolean;
};

export function BasicInfo() {
  return (
    <>
      {" "}
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: false, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[{ required: false, message: "Please input your description!" }]}
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
    </>
  );
}
