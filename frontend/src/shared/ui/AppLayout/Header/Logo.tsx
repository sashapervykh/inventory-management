import Link from "antd/es/typography/Link";
import { ROUTES } from "../../../constants/routes";

export function Logo() {
  return <Link href={ROUTES.HOME}>INVENTO</Link>;
}
