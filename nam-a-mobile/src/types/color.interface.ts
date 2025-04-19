import { Product } from './product.interface';

export interface Color {
  id: string;
  name?: string;
  imageUrl?: string;

  // Relationships
  products?: Product[];
} 