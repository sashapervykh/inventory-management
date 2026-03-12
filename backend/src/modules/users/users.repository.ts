import { prisma } from "../../shared/lib/prisma.js";
import type { StatusUpdateDto } from "./types/StatusUpdateDto.js";
import type { TypeUpdateDto } from "./types/TypeUpdateDto.js";

export class UsersRepository {
  async deleteUserInventories(userId: string, inventoriesIds: string[]) {
    await prisma.inventory.deleteMany({
      where: {
        ownerId: userId,
        id: { in: inventoriesIds },
      },
    });
  }

  getUsers = async (search: string | undefined, limit: number | undefined) => {
    const users = await prisma.user.findMany({
      where: search
        ? {
            OR: [
              { firstName: { contains: search, mode: "insensitive" } },
              { lastName: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      take: limit ?? undefined,
      orderBy: { firstName: "desc" },
    });
    return users;
  };

  async getUserInventories(userId: string) {
    const [owned, edited] = await prisma.$transaction([
      prisma.inventory.findMany({
        where: {
          ownerId: userId,
        },
        select: {
          id: true,
          title: true,
          description: true,
          category: {
            select: { name: true },
          },
        },
        orderBy: { title: "desc" },
      }),

      prisma.inventory.findMany({
        where: {
          inventories_access: {
            some: { userId },
          },
          ownerId: { not: userId },
        },
        select: {
          id: true,
          title: true,
          description: true,
          category: {
            select: { name: true },
          },
        },
        orderBy: { title: "desc" },
      }),
    ]);

    return { owned, edited };
  }

  async findById(id: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { id: id } });
    return user;
  }

  updateUsersStatus = async ({ userIds, isBlocked }: StatusUpdateDto) => {
    const updatedCount = await prisma.user.updateMany({
      where: { id: { in: userIds } },
      data: { status: isBlocked ? "blocked" : "active" },
    });
    return updatedCount;
  };

  updateUsersType = async ({ userIds, userType }: TypeUpdateDto) => {
    const updatedCount = await prisma.user.updateMany({
      where: { id: { in: userIds } },
      data: { type: userType },
    });
    return updatedCount;
  };
}

export const usersRepository = new UsersRepository();
