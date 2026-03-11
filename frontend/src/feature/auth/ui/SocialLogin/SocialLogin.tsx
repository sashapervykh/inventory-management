import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { useTranslation } from "react-i18next";

export function SocialLogin() {
  const { t } = useTranslation();
  const loginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };
  const loginWithGithub = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };
  return (
    <>
      {" "}
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
        <Button
          className="flex w-full"
          type="primary"
          size="large"
          onClick={loginWithGithub}
        >
          <GithubOutlined className="text-2xl" /> {t("loginGithub")}
        </Button>
      </div>
    </>
  );
}
