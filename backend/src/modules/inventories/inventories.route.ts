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
inventoriesRouter.get(
  INVENTORY_ROUTES.ONE,
  requireAuth,
  inventoriesController.getInventoryById,
);
inventoriesRouter.put(
  INVENTORY_ROUTES.ONE,
  requireAuth,
  inventoriesController.updateInventoryById,
);
inventoriesRouter.get(
  INVENTORY_ROUTES.ACCESS,
  requireAuth,
  inventoriesController.getEditors,
);
inventoriesRouter.post(
  INVENTORY_ROUTES.ACCESS,
  requireAuth,
  inventoriesController.updateInventoryAccess,
);
inventoriesRouter.delete(
  INVENTORY_ROUTES.ACCESS,
  requireAuth,
  inventoriesController.deleteEditors,
);
inventoriesRouter.put(
  INVENTORY_ROUTES.CUSTOM_ID,
  requireAuth,
  inventoriesController.updateCustomIdFormat,
);

export default inventoriesRouter;
