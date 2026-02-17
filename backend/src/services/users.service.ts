import { usersRepository } from "../repositories/users.repository.js";

class UsersService {
  async createUser(name: string, email: string) {
    const user = await usersRepository.createUser(name, email);
    return user;
  }
}

export const usersService = new UsersService();
