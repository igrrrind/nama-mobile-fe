import { Item } from './Item';
import { ServiceModelPrice } from './service-model-price.interface';

export interface Service extends Item{
  id: string;
  serviceName?: string;
  slug: string;

  // Relationships
  serviceModelPrices?: ServiceModelPrice[];
} 