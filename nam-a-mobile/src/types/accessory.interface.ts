import { Model } from './model.interface';
import { AccessoryCategory } from './accessory-category.interface';
import { Item } from './Item';

export interface Accessory extends Item {
  id: string;
  modelId: string;
  name: string;
  accessoryCategoryId: string;
  description?: string;
  origin?: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  slug: string;

  // Relationships
  accessoryCategory?: AccessoryCategory;
  model?: Model;
} 