import { Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useUser } from "../../../../entity/user/model/useUser";

interface Props {
  isOpen: boolean;
  close: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
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
      title="Create Contact"
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
          label="First Name:"
          initialValue={user.firstName}
          rules={[{ required: true, message: "Please add your first name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name:"
          initialValue={user.lastName}
          rules={[{ required: true, message: "Please add your last name" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email:"
          initialValue={user.email}
          rules={[
            { required: true, message: "Please add your email" },
            {
              type: "email",
              message: "The input is not a valid email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="title"
          label="Tile:"
          rules={[{ required: true, message: "Please add your email" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
