import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function SignUpLink() {
  const { t } = useTranslation();

  return (
    <Link to="/register" className="flex h-fit m-[auto_0px]">
      <Button type="link">
        <div className="w-fit whitespace-nowrap text-[16px]">
          {t("register")}
        </div>
      </Button>
    </Link>
  );
}
