import type { MenuProps } from "antd";
import { ThemeToggler } from "./ThemeToggler";
import { LanguageToggler } from "./LanguageToggler";

type MenuItem = Required<MenuProps>["items"][number];

export const settings: MenuItem[] = [
  { key: "theme", label: <ThemeToggler /> },
  { key: "language", label: <LanguageToggler /> },
];
