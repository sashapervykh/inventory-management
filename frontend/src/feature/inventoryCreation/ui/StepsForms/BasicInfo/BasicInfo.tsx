import { Checkbox, Form, Input, Select } from "antd";
import type { FormDataType } from "../../../model/types/FormDataType";
import { MDTextArea } from "./MdTextArea";
import { CategorySelect } from "../CategorySelect/CategorySelect";

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
        <MDTextArea />
      </Form.Item>
      <Form.Item<FormDataType>
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 20 }}
        label="Category"
        name="category"
        tooltip="Choose your inventory category"
        rules={[{ required: true, message: "Please choose category!" }]}
      >
        <CategorySelect />
      </Form.Item>
    </>
  );
}
