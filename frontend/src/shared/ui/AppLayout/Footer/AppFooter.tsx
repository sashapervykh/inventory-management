import { Divider, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";

const { Text } = Typography;

export function AppFooter() {
  return (
    <Footer className="flex flex-col justify-center mt-4">
      <Divider />
      <Text className="w-auto fs-5 text-center">
        Made by{" "}
        <Link
          className="fs-5"
          href="https://github.com/sashapervykh"
          target="_blank"
        >
          Sasha Pervykh
        </Link>{" "}
        ©
      </Text>
    </Footer>
  );
}
