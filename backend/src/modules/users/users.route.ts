import { Router } from "express";
import { userController } from "./users.controller.js";
import { USERS_ROUTES } from "../../shared/constants/routes/usersRoutes.js";

const usersRouter = Router();
usersRouter.post(USERS_ROUTES.MAIN, userController.createUser);
usersRouter.get(USERS_ROUTES.MAIN, userController.getUsers);
usersRouter.get(USERS_ROUTES.ME, userController.findById);

export default usersRouter;
