import type { MenuProps } from "antd";
import Link from "antd/es/typography/Link";
import { ROUTES } from "../../../../constants/routes";

const navLinks = [ROUTES.HOME, ROUTES.USER, ROUTES.ADMIN];
export const navItems: MenuProps["items"] = navLinks.map((key) => ({
  key,
  label: <Link href={`/${key}`}>{key.toUpperCase()}</Link>,
}));
