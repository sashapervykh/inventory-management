import Link from "antd/es/typography/Link";
import { ROUTES } from "../../../../../shared/constants/routes";

export function Logo() {
  return (
    <Link className="flex h-fit m-[auto_0px_auto_0px]" href={ROUTES.HOME}>
      <div className="w-37.5 text-3xl">INVENTO</div>
    </Link>
  );
}
