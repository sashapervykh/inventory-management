import { Router } from "express";
import { userController } from "./users.controller.js";
import { USERS_ROUTES } from "./constants/usersRoutes.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";
import { requireActive } from "../../shared/middlewares/requireActive.js";
import { requireAdmin } from "../../shared/middlewares/requireAdmin.js";

const usersRouter = Router();
usersRouter.get(USERS_ROUTES.MAIN, userController.getUsers);
usersRouter.get(USERS_ROUTES.ME, userController.findById);
usersRouter.get(
  USERS_ROUTES.USER_INVENTORIES,
  requireAuth,
  userController.getUserInventories,
);
usersRouter.delete(
  USERS_ROUTES.USER_INVENTORIES,
  requireAuth,
  userController.deleteUserInventories,
);
usersRouter.patch(
  USERS_ROUTES.STATUS,
  requireAuth,
  requireActive,
  requireAdmin,
  userController.updateUsersStatus,
);
usersRouter.patch(
  USERS_ROUTES.TYPE,
  requireAuth,
  requireActive,
  requireAdmin,
  userController.updateUsersType,
);
usersRouter.delete(
  USERS_ROUTES.DELETE,
  requireAuth,
  requireActive,
  requireAdmin,
  userController.deleteUsers,
);

export default usersRouter;
