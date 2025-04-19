import { Product } from './product.interface';

export interface Storage {
  id: string;
  name?: string;

  // Relationships
  products?: Product[];
} 