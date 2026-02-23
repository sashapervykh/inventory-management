import { Form, Input, Select } from "antd";

const { TextArea } = Input;
type FieldType = {
  title?: string;
  description?: string;
  category?: string;
};

export function RequiredFiles() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      {" "}
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input inventory title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input inventory description!" },
        ]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item<FieldType>
        label="Category"
        name="category"
        rules={[
          { required: true, message: "Please choose inventory category!" },
        ]}
      >
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
    </>
  );
}
