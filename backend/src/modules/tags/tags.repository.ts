import { prisma } from "../../shared/lib/prisma.js";

export class TagsRepository {
  async getAllTags() {
    const tags = await prisma.tag.findMany();
    return tags;
  }
}

export const tagsRepository = new TagsRepository();
