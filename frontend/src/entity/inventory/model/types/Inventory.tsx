export interface Inventory {
  title: string;
  description: string;
  isPublic: boolean;
  category: string;
  tags: string[] | undefined;
}
