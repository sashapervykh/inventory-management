import { TagsRepository, tagsRepository } from "./tags.repository.js";

export class TagsService {
  private repository: TagsRepository;

  constructor(repository: TagsRepository) {
    this.repository = repository;
  }

  getAllTags = async () => {
    const tags = await this.repository.getAllTags();
    return tags;
  };
}

export const tagsService = new TagsService(tagsRepository);
