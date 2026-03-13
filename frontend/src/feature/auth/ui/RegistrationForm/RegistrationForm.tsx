import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { useUserData } from "../../model/hooks/useAuth";
import { useNavigate } from "react-router-dom";

type FieldType = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const { isRegistering, registerUser, isSuccess } = useUserData();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    await registerUser(values);
    if (isSuccess) navigate("/home");
  };

  return (
    <>
      <Form
        initialValues={{ remember: false }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        validateTrigger={["onSubmit"]}
      >
        <Form.Item<FieldType>
          label="Email:"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email format!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password:"
          name="password"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item<FieldType> label="First name:" name="firstName">
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType> label="Last name:" name="lastName">
          <Input size="large" />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            className="flex w-full"
            type="primary"
            htmlType="submit"
            size="large"
            disabled={isRegistering}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
