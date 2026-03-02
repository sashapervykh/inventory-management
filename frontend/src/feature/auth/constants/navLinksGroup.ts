import { ROUTES } from "../../../shared/constants/routes";

export const NAV_LINKS_GROUPS = {
  none: [ROUTES.HOME, ROUTES.CREATE],
  user: [ROUTES.HOME, ROUTES.USER, ROUTES.CREATE],
  admin: [ROUTES.HOME, ROUTES.USER, ROUTES.ADMIN, ROUTES.CREATE],
};
