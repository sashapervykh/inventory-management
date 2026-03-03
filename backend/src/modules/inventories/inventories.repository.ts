import { prisma } from "../../shared/lib/prisma.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";

class InventoriesRepository {
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
}

export const inventoriesRepository = new InventoriesRepository();
