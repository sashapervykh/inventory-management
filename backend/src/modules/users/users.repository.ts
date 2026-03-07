import { prisma } from "../../shared/lib/prisma.js";

export class UsersRepository {
  async createUser(name: string, email: string) {
    const user = await prisma.user.create({ data: { name, email } });
    return user;
  }

  getUsers = async (search: string | undefined, limit: number | undefined) => {
    const users = await prisma.user.findMany({
      where: search
        ? {
            OR: [
              { first_name: { contains: search, mode: "insensitive" } },
              { last_name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      take: limit ?? undefined,
    });
    return users;
  };

  async findById(id: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { id: id } });
    return user;
  }
}

export const usersRepository = new UsersRepository();
