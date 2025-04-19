import { Product } from './product.interface';

export interface Condition {
  id: string;
  name?: string;

  // Relationships
  products?: Product[];
} 