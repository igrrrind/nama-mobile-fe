import { User } from './user.interface';

export interface Blog {
  id?: string;
  authorId?: string;
  author?: string;
  title?: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt?: Date;
  slug?: string;
  isActive?: boolean;
  relatedPosts?: {
    title: string;
    slug: string
  }[] 

  // Relationships
  user?: User[];
} 