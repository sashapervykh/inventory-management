import { Router } from "express";
import { userController } from "./users.controller.js";
import { USERS_ROUTES } from "./constants/usersRoutes.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";

const usersRouter = Router();
usersRouter.get(USERS_ROUTES.MAIN, userController.getUsers);
usersRouter.get(USERS_ROUTES.ME, userController.findById);
usersRouter.get(
  USERS_ROUTES.USER_INVENTORIES,
  requireAuth,
  userController.getUserInventories,
);

export default usersRouter;
