export function flatCategory(
  inventories: {
    id: string;
    title: string;
    description: string;
    category: { name: string };
  }[],
) {
  return inventories.map((inventory) => ({
    ...inventory,
    category: inventory.category.name,
  }));
}
