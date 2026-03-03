import { prisma } from "../../shared/lib/prisma.js";

export class TagsRepository {
  async getAllTags(search: string) {
    const tags = await prisma.tag.findMany({
      where: { name: { contains: search } },
      take: 10,
      orderBy: { name: "asc" },
    });
    return tags;
  }
}

export const tagsRepository = new TagsRepository();
