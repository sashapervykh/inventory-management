import { AuthError } from "../errors/AuthError.js";
import { usersRepository } from "../repositories/users.repository.js";
import { getFrontendUser } from "../utils/getFrontendUser.js";

class UsersService {
  async createUser(name: string, email: string) {
    const user = await usersRepository.createUser(name, email);
    return user;
  }

  async getUser(id: string) {
    try {
      const user = await usersRepository.getUser(id);
      const frontendUser = getFrontendUser(user);
      return frontendUser;
    } catch (error) {
      throw new AuthError();
    }
  }
}

export const usersService = new UsersService();
