import { prisma } from "../../shared/lib/prisma.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";

class InventoriesRepository {
  async createInventory(createInventoryDto: CreateInventoryDTO) {
    const inventory = await prisma.inventory.create({
      data: createInventoryDto,
    });
    return inventory;
  }
}

export const inventoriesRepository = new InventoriesRepository();
