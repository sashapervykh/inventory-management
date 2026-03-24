import { Form, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import type { User } from "../../../../../entity/user/model/User";

import { useParams } from "react-router-dom";
import { useUploadReport } from "../../../model/hooks/useUploadReport";

interface Props {
  isOpen: boolean;
  close: () => void;
  user: User;
}

export function HelpModal({ isOpen, close, user }: Props) {
  const [form] = useForm();
  const { inventoryId } = useParams();
  const { uploadReport } = useUploadReport();
  const currentLink = window.location.href;
  const fullName =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.firstName
        ? user.firstName
        : user.lastName
          ? user.lastName
          : "Anonymous";
  const handleFinish = ({
    priority,
    summary,
  }: {
    priority: string;
    summary: string;
  }) => {
    const report = JSON.stringify({
      priority,
      summary,
      reportedBy: `${fullName} (${user.email})`,
      currentLink,
      inventoryId: inventoryId ?? null,
    });

    const response = uploadReport(report);
    console.log(response);
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
          name="priority"
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
