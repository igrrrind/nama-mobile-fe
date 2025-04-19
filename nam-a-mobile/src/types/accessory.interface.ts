import { Model } from './model.interface';
import { AccessoryCategory } from './accessory-category.interface';

export interface Accessory {
  id: string;
  modelId: string;
  name?: string;
  accessoryCategoryId: string;
  description?: string;
  origin?: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  slug?: string;

  // Relationships
  accessoryCategory?: AccessoryCategory;
  model?: Model;
} 