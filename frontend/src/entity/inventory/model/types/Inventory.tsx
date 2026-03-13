export interface Inventory {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  category: string;
  tags: string[] | undefined;
}
