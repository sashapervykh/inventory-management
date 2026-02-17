import { prisma } from "../lib/prisma.js";

class UsersRepository {
  async createUser(name: string, email: string) {
    const user = await prisma.user.create({ data: { name, email } });
    return user;
  }
}

export const usersRepository = new UsersRepository();
