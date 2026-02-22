import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Card, Divider } from "antd";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

export function RegisterPage() {
  const { t } = useTranslation();
  const loginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}auth/google`;
  };
  return (
    <Card className="min-w-25 max-w-125 w-[80vw] h-fit">
      <Title level={2} className="flex justify-self-center">
        {t("loginTitle")}
      </Title>
      <Divider />
      <div className="flex flex-col w-full gap-5">
        <Button
          className="flex w-full"
          type="primary"
          size="large"
          onClick={loginWithGoogle}
        >
          <GoogleOutlined className="text-2xl" /> {t("loginGoogle")}
        </Button>
        <Button className="flex w-full" type="primary" size="large">
          <FacebookOutlined className="text-2xl" /> {t("loginFacebook")}
        </Button>
      </div>
    </Card>
  );
}
