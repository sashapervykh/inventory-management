import { connect } from "node:http2";
import { prisma } from "../../shared/lib/prisma.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";

class InventoriesRepository {
  async createInventory({
    title,
    description,
    ownerId,
    isPublic,
    category,
  }: CreateInventoryDTO) {
    console.log(category);
    const inventory = await prisma.inventory.create({
      data: {
        title,
        description,
        isPublic,
        owner: { connect: { id: ownerId } },
        category: { connect: { name: category } },
      },
    });
    return inventory;
  }
}

export const inventoriesRepository = new InventoriesRepository();
