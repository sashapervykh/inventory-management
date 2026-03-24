export interface FrontendInventory {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  category: string;
  ownerName: string;
  ownerEmail: string;
  createdAt: Date;
  tags: string[] | undefined;
}
