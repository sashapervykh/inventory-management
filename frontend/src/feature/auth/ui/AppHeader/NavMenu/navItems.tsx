import type { MenuProps } from "antd";
import { NavLink } from "./NavLink";
import type { MenuType } from "../../../model/types/MenuType";
import { NAV_LINKS_GROUPS } from "../../../constants/navLinksGroup";

export function getNavItems(userType: MenuType) {
  const navLinks = NAV_LINKS_GROUPS[userType];
  const navItems: MenuProps["items"] = navLinks.map((key) => ({
    key,
    label: <NavLink page={key} />,
  }));
  return navItems;
}
