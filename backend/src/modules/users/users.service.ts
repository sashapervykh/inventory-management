import { usersRepository } from "./users.repository.js";
import { getFrontendUser } from "../../shared/utils/getFrontendUser.js";
import { AuthError } from "../../shared/errors/AuthError.js";

class UsersService {
  async createUser(name: string, email: string) {
    const user = await usersRepository.createUser(name, email);
    return user;
  }

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

export const usersService = new UsersService();
