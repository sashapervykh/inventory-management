import { Router } from "express";
import { userController } from "../controllers/users.controller.js";
import { USERS_ROUTES } from "../constants/routes/usersRoutes.js";

const usersRouter = Router();
usersRouter.post(USERS_ROUTES.MAIN, userController.createUser);
usersRouter.get(USERS_ROUTES.ME, userController.getUser);

export default usersRouter;
