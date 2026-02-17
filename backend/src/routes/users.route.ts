import { Router } from "express";
import { userController } from "../controllers/users.controller.js";

const usersRouter = Router();
usersRouter.post("/", userController.createUser);

export default usersRouter;
