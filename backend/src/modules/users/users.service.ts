import { UsersRepository, usersRepository } from "./users.repository.js";
import { getFrontendUser } from "../../shared/utils/getFrontendUser.js";
import { AuthError } from "../../shared/errors/AuthError.js";
import { getFrontendUsers } from "./utils/getFrontendUsers.js";
import { flatCategory } from "./utils/getFrontendUserInventory.js";
import type { StatusUpdateDto } from "./types/StatusUpdateDto.js";
import type { TypeUpdateDto } from "./types/TypeUpdateDto.js";

export class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  deleteUserInventories = async (userId: string, inventoriesIds: string[]) => {
    await this.repository.deleteUserInventories(userId, inventoriesIds);
  };

  deleteUsers = async (userIds: string[], adminId: string) => {
    let affectedSelf = userIds.includes(adminId) ? true : false;
    const result = await this.repository.deleteUsers(userIds);
    return { affectedSelf };
  };

  getUsers = async (search: string | undefined, limit: number | undefined) => {
    const users = await this.repository.getUsers(search, limit);
    const frontendUsers = getFrontendUsers(users);
    return frontendUsers;
  };

  async findById(id: string) {
    try {
      const user = await usersRepository.findById(id);
      const frontendUser = getFrontendUser(user);
      return frontendUser;
    } catch {
      throw new AuthError();
    }
  }

  updateUsersStatus = async ({
    userIds,
    isBlocked,
    adminId,
  }: StatusUpdateDto & { adminId: string }) => {
    const affectedSelf = isBlocked && userIds.includes(adminId);
    const updatedCount = await this.repository.updateUsersStatus({
      userIds,
      isBlocked,
    });
    return { ...updatedCount, affectedSelf };
  };

  updateUsersType = async (typeUpdateDto: TypeUpdateDto) => {
    const updatedCount = await this.repository.updateUsersType(typeUpdateDto);
    return updatedCount;
  };

  getUserInventories = async (userId: string) => {
    const { owned, edited } = await this.repository.getUserInventories(userId);
    return { owned: flatCategory(owned), edited: flatCategory(edited) };
  };
}

export const usersService = new UsersService(usersRepository);
