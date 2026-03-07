import { prisma } from "../../shared/lib/prisma.js";

export class CategoriesRepository {
  async getAllCategories() {
    const categories = await prisma.category.findMany();
    return categories;
  }
}

export const categoriesRepository = new CategoriesRepository();
