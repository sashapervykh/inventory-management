import { UsersRepository, usersRepository } from "./users.repository.js";
import { getFrontendUser } from "../../shared/utils/getFrontendUser.js";
import { AuthError } from "../../shared/errors/AuthError.js";

export class UsersService {
  repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async createUser(name: string, email: string) {
    const user = await usersRepository.createUser(name, email);
    return user;
  }

  getUsers = async () => {
    const users = await this.repository.getUsers();
    return users;
  };

  async findById(id: string) {
    try {
      console.log("service", id);
      const user = await usersRepository.findById(id);
      const frontendUser = getFrontendUser(user);
      return frontendUser;
    } catch {
      throw new AuthError();
    }
  }
}

export const usersService = new UsersService(usersRepository);
