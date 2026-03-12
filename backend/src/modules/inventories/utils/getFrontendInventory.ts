import { getFrontendName } from "../../../shared/utils/getFrontendName.js";
import type { BackendInventory } from "../types/BackendInventory.js";
import type { FrontendInventory } from "../types/FrontendInventory.js";

export function getFrontendInventory(
  backendInventory: BackendInventory | null,
): FrontendInventory | undefined {
  if (!backendInventory) return;

  const { id, title, description, isPublic, category, tags, owner, createdAt } =
    backendInventory;

  const frontendTags = tags.map((tag) => tag.tag.name);
  return {
    id,
    title,
    description,
    isPublic,
    ownerName: getFrontendName(owner.firstName, owner.lastName).fullName,
    ownerEmail: owner.email,
    category: category.name,
    createdAt: createdAt,
    tags: frontendTags,
  };
}
