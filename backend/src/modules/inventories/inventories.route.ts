import { Router } from "express";
import { inventoriesController } from "./inventories.controller.js";
import { INVENTORY_ROUTES } from "./constants/inventoriesRoutes.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";

const inventoriesRouter = Router();
inventoriesRouter.post(
  INVENTORY_ROUTES.MAIN,
  requireAuth,
  inventoriesController.createInventory,
);

export default inventoriesRouter;
