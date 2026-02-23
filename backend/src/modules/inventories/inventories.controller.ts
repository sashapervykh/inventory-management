import type { NextFunction, Request, Response } from "express";
import { inventoriesService } from "./inventories.service.js";
import { createInventorySchema } from "./schemas/createInventorySchema.js";

class InventoriesController {
  async createInventory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: ownerId } = req.user?.id;
      const inventoryInfo = createInventorySchema.parse(req.body);
      const inventory = await inventoriesService.createInventory({
        ...inventoryInfo,
        ownerId,
      });
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  }
}

export const inventoriesController = new InventoriesController();
