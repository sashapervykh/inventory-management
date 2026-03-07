import { Checkbox, Form } from "antd";
import type { FormDataType } from "../../../model/types/FormDataType";
import { TagsSelect } from "../TagsSelect/TagsSelect";

export function AdditionalInfo() {
  return (
    <>
      {" "}
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
      <Form.Item<FormDataType>
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 20 }}
        label="Tags"
        name="tags"
        tooltip="Add your inventory tags"
      >
        <TagsSelect />
      </Form.Item>
    </>
  );
}
