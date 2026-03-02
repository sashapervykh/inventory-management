import { inventoriesRepository } from "./inventories.repository.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";

class InventoriesService {
  async createInventory(createInventoryDto: CreateInventoryDTO) {
    const inventory =
      await inventoriesRepository.createInventory(createInventoryDto);
    return inventory;
  }
}

export const inventoriesService = new InventoriesService();
