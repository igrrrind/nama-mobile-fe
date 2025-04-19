import { Model } from './model.interface';
import { ComponentCategory } from './component-category.interface';
import { ServiceDetail } from './service-detail.interface';

export interface Component {
  id: string;
  modelId: string;
  name?: string;
  componentCategoryId: string;
  description?: string;
  origin?: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  slug?: string;

  // Relationships
  componentCategory?: ComponentCategory;
  model?: Model;
  serviceDetails: ServiceDetail[];
} 