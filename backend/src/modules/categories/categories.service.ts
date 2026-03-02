import {
  CategoriesRepository,
  categoriesRepository,
} from "./categories.repository.js";

export class CategoriesService {
  private repository: CategoriesRepository;

  constructor(repository: CategoriesRepository) {
    this.repository = repository;
  }

  getAllCategories = async () => {
    const categories = await this.repository.getAllCategories();
    return categories;
  };
}

export const categoriesService = new CategoriesService(categoriesRepository);
