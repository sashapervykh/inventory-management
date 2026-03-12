import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { useUserData } from "../../model/hooks/useAuth";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email: string;
  password: string;
};

export function LoginForm() {
  const { isLogining, loginUser, success } = useUserData();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await loginUser(values);
    if (success) navigate("/home");
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
        <Form.Item label={null}>
          <Button
            className="flex w-full"
            type="primary"
            htmlType="submit"
            size="large"
            disabled={isLogining}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
