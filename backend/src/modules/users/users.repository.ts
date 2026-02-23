import { prisma } from "../../shared/lib/prisma.js";

class UsersRepository {
  async createUser(name: string, email: string) {
    const user = await prisma.user.create({ data: { name, email } });
    return user;
  }

  async getUser(id: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { id: id } });
    return user;
  }
}

export const usersRepository = new UsersRepository();
