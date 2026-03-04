import { prisma } from "../../shared/lib/prisma.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";
import type { UpdateInventoryDTO } from "./type/UpdateInventoryDTO.js";

export class InventoriesRepository {
  async createInventory({
    title,
    description,
    ownerId,
    isPublic,
    category,
    tags,
  }: CreateInventoryDTO) {
    console.log(tags);
    const normalizedTags = tags
      .map((tag) => tag.trim().toLowerCase())
      .filter((tag, i) => tags.indexOf(tag) === i);
    const inventory = await prisma.inventory.create({
      data: {
        title,
        description,
        isPublic,
        owner: { connect: { id: ownerId } },
        category: { connect: { name: category } },
        tags: {
          create: normalizedTags.map((tag) => ({
            tag: {
              connectOrCreate: { where: { name: tag }, create: { name: tag } },
            },
          })),
        },
      },
    });
    return inventory;
  }

  async getInventoryById(inventoryId: string) {
    const inventory = await prisma.inventory.findUnique({
      where: { id: inventoryId },
      include: {
        category: true,
        tags: { include: { tag: true } },
      },
    });
    return inventory;
  }

  async updateInventoryById(inventoryId: string, data: UpdateInventoryDTO) {
    const inventory = await prisma.inventory.update({
      where: { id: inventoryId },
      data: { ...data },
    });
    return inventory;
  }
}

export const inventoriesRepository = new InventoriesRepository();
