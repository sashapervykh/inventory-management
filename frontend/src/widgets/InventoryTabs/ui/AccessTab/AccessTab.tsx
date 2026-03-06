import { PublicAccess } from "./PublicAccess";
import { LimitedAccess } from "../LimitedAccess/LimitedAccess";

export function AccessTab({ isPublic }: { isPublic: boolean }) {
  if (isPublic) {
    return <PublicAccess />;
  }
  return <LimitedAccess />;
}
