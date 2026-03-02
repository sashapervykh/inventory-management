import { Router } from "express";
import { categoriesController } from "./categories.controller.js";
import { CATEGORIES_ROUTES } from "./constants/categoriesRoutes.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";

const categoriesRouter = Router();
categoriesRouter.get(
  CATEGORIES_ROUTES.MAIN,
  requireAuth,
  categoriesController.getAllCategories,
);

export default categoriesRouter;
