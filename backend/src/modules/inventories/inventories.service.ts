import {
  InventoriesRepository,
  inventoriesRepository,
} from "./inventories.repository.js";
import type { CreateInventoryDTO } from "./type/CreateInventoryDTO.js";
import type { UpdateInventoryDTO } from "./type/UpdateInventoryDTO.js";
import { getFrontendEditors } from "./utils/getFrontendEditors.js";
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

  deleteEditors = async (inventoryId: string, userIds: string[]) => {
    await this.repository.deleteEditors(inventoryId, userIds);
  };

  getInventoryById = async (inventoryId: string) => {
    const inventory = await this.repository.getInventoryById(inventoryId);
    const frontendInventory = getFrontendInventory(inventory);
    return frontendInventory;
  };

  getEditors = async (inventoryId: string) => {
    const editors = await this.repository.getEditors(inventoryId);
    const frontendEditors = getFrontendEditors(editors);
    return frontendEditors;
  };

  updateInventoryById = async (
    inventoryId: string,
    data: UpdateInventoryDTO,
  ) => {
    const inventory = await this.repository.updateInventoryById(
      inventoryId,
      data,
    );
    return inventory;
  };

  updateAccessInventory = async (inventoryId: string, userIds: string[]) => {
    const updatedInventoryAccess = await this.repository.updateAccessInventory(
      inventoryId,
      userIds,
    );
    const frontendEditors = getFrontendEditors(updatedInventoryAccess);
    return frontendEditors;
  };
}

export const inventoriesService = new InventoriesService(inventoriesRepository);
