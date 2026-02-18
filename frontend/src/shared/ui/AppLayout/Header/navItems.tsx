import type { MenuProps } from "antd";
import { ROUTES } from "../../../constants/routes";
import Link from "antd/es/typography/Link";

const navLinks = [ROUTES.HOME, ROUTES.USER, ROUTES.ADMIN];
export const navItems: MenuProps["items"] = navLinks.map((key) => ({
  key,
  label: <Link href={`/${key}`}>{key.toUpperCase()}</Link>,
}));
