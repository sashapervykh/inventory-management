import { Card } from "antd";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { RegisterForm } from "../../feature/auth/ui/RegistrationForm/RegistrationForm";
import { SocialLogin } from "../../feature/auth/ui/SocialLogin/SocialLogin";

export function RegisterPage() {
  const { t } = useTranslation();

  return (
    <Card className="min-w-25 max-w-125 w-[80vw] h-fit">
      <Title level={2} className="flex justify-self-center">
        {t("loginTitle")}
      </Title>
      <RegisterForm />
      <SocialLogin />
    </Card>
  );
}
