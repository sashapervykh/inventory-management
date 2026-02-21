import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Card, Divider } from "antd";
import Title from "antd/es/typography/Title";

export function RegisterPage() {
  const loginWithGoogle = () => {
    console.log("Start");
    window.location.href = `${import.meta.env.VITE_API_URL}auth/google`;
  };
  return (
    <Card className="min-w-25 max-w-125 w-[80vw] h-fit">
      <Title level={2} className="flex justify-self-center">
        Sign in to Make Changes
      </Title>
      <Divider />
      <div className="flex flex-col w-full gap-5">
        <Button
          className="flex w-full"
          type="primary"
          size="large"
          onClick={loginWithGoogle}
        >
          <GoogleOutlined className="text-2xl" /> Sign in with Google
        </Button>
        <Button className="flex w-full" type="primary" size="large">
          <FacebookOutlined className="text-2xl" /> Sign in with Facebook
        </Button>
      </div>
    </Card>
  );
}
