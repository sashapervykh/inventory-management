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
    console.log(id);
    const user = await prisma.user.findFirstOrThrow({ where: { id: id } });
    console.log(user);
    return user;
  }
}

export const usersRepository = new UsersRepository();
