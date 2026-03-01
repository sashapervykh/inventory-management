import { Checkbox, Form, Input } from "antd";
import type { FormDataType } from "../../model/types/FormDataType";

const { TextArea } = Input;

export function BasicInfo() {
  return (
    <>
      {" "}
      <Form.Item<FormDataType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FormDataType>
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item<FormDataType>
        label="Is public?"
        name="isPublic"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>
    </>
  );
}
