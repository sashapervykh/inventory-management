export interface CreateInventoryDTO {
  title: string;
  description: string;
  isPublic: boolean;
  ownerId: string;
  category: string;
  tags: string[];
}
