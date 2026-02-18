import type { MenuProps } from "antd";
import { ROUTES } from "../../../../constants/routes";
import { NavLink } from "./NavLink";

const navLinks = [ROUTES.HOME, ROUTES.USER, ROUTES.ADMIN];
export const navItems: MenuProps["items"] = navLinks.map((key) => ({
  key,
  label: <NavLink page={key} />,
}));
