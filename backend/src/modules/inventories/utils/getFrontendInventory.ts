import type { BackendInventory } from "../types/BackendInventory.js";
import type { FrontendInventory } from "../types/FrontendInventory.js";

export function getFrontendInventory(
  backendInventory: BackendInventory | null,
): FrontendInventory | undefined {
  if (!backendInventory) return;

  const { title, description, isPublic, category, tags } = backendInventory;

  const frontendTags = tags.map((tag) => tag.tag.name);
  return {
    title,
    description,
    isPublic,
    category: category.name,
    tags: frontendTags,
  };
}
