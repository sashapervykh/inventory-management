import { Divider, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

export function AppFooter() {
  const { t } = useTranslation();
  return (
    <Footer className="flex flex-col justify-center mt-4">
      <Divider />
      <Text className="w-auto fs-5 text-center">
        {t("footerText")}{" "}
        <Link
          className="fs-5"
          href="https://github.com/sashapervykh"
          target="_blank"
        >
          {t("footerLink")}
        </Link>{" "}
        ©
      </Text>
    </Footer>
  );
}
