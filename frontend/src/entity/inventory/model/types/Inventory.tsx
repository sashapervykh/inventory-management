export interface Inventory {
  title: string;
  description: string;
  isPublic: boolean;
  category: { name: string };
  tags: string[] | undefined;
}
