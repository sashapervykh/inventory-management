import { UsersRepository, usersRepository } from "./users.repository.js";
import { getFrontendUser } from "../../shared/utils/getFrontendUser.js";
import { AuthError } from "../../shared/errors/AuthError.js";
import { getFrontendUsers } from "./utils/getFrontendUsers.js";
import { flatCategory } from "./utils/getFrontendUserInventory.js";

export class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

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

  getUserInventories = async (userId: string) => {
    const { owned, edited } = await this.repository.getUserInventories(userId);
    return { owned: flatCategory(owned), access: flatCategory(edited) };
  };
}

export const usersService = new UsersService(usersRepository);
