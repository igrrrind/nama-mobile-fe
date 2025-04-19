import { User } from './user.interface';

export interface Blog {
  id: string;
  authorId: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  slug?: string;
  isActive: boolean;

  // Relationships
  user: User[];
} 