import {
  InventoriesRepository,
  inventoriesRepository,
} from "./inventories.repository.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";
import { getFrontendInventory } from "./utils/getFrontendInventory.js";

export class InventoriesService {
  private repository: InventoriesRepository;

  constructor(repository: InventoriesRepository) {
    this.repository = repository;
  }

  createInventory = async (createInventoryDto: CreateInventoryDTO) => {
    const inventory = await this.repository.createInventory(createInventoryDto);
    return inventory;
  };

  getInventoryById = async (inventoryId: string) => {
    const inventory = await this.repository.getInventoryById(inventoryId);
    const frontendInventory = getFrontendInventory(inventory);
    return frontendInventory;
  };

  updateInventoryById = async (inventoryId: string, data) => {
    const inventory = await this.repository.updateInventoryById(
      inventoryId,
      data,
    );
    return inventory;
  };
}

export const inventoriesService = new InventoriesService(inventoriesRepository);
