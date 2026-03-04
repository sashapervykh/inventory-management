import { prisma } from "../../shared/lib/prisma.js";

export class UsersRepository {
  async createUser(name: string, email: string) {
    const user = await prisma.user.create({ data: { name, email } });
    return user;
  }

  getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };

  async findById(id: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { id: id } });
    return user;
  }
}

export const usersRepository = new UsersRepository();
