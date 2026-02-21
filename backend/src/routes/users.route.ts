import { Router } from "express";
import { userController } from "../controllers/users.controller.js";

const usersRouter = Router();
usersRouter.post("/", userController.createUser);
usersRouter.get("/me", userController.getUser);

export default usersRouter;
