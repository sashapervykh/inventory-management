import { Checkbox, Form, Input } from "antd";
import type { FormDataType } from "../../../model/types/FormDataType";
import { InfoCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export function BasicInfo() {
  return (
    <>
      {" "}
      <Form.Item<FormDataType>
        label="Title"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 20 }}
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
        tooltip="Add the name of your inventory"
      >
        <Input />
      </Form.Item>
      <Form.Item<FormDataType>
        label="Description"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 20 }}
        name="description"
        tooltip="Add a description of your inventory. Markdown supported"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item<FormDataType>
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 20 }}
        label="Is public?"
        name="isPublic"
        tooltip="Grant write access to all users"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>
    </>
  );
}
