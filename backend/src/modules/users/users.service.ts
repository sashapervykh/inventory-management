import { UsersRepository, usersRepository } from "./users.repository.js";
import { getFrontendUser } from "../../shared/utils/getFrontendUser.js";
import { AuthError } from "../../shared/errors/AuthError.js";
import { getFrontendUsers } from "./utils/getFrontendUsers.js";

export class UsersService {
  repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async createUser(name: string, email: string) {
    const user = await usersRepository.createUser(name, email);
    return user;
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
}

export const usersService = new UsersService(usersRepository);
