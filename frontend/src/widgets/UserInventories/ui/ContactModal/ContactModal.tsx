import { Form, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useUser } from "../../../../entity/user/model/useUser";
import TextArea from "antd/es/input/TextArea";

interface Props {
  isOpen: boolean;
  close: () => void;
}

export function ContactModal({ isOpen, close }: Props) {
  const [form] = useForm();
  const { user } = useUser();

  if (!user) return null;

  const handleFinish = ({
    priority,
    summary,
  }: {
    priority: string;
    summary: string;
  }) => {
    form.resetFields();
    close();
  };

  return (
    <Modal
      title="Create Help Ticket"
      open={isOpen}
      onOk={() => form.submit()}
      onCancel={() => {
        form.resetFields();
        close();
      }}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="firstName"
          initialValue={user}
          rules={[{ required: true, message: "Please select a priority" }]}
        >
          <Select
            className="w-35"
            placeholder="Priority"
            options={[
              { label: "High", value: "High" },
              { label: "Average", value: "Average" },
              { label: "Low", value: "Low" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="summary"
          rules={[{ required: true, message: "Please describe your case" }]}
        >
          <TextArea className="w-35" placeholder="Describe your case" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
