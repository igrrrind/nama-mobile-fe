import { ServiceModelPrice } from './service-model-price.interface';

export interface Service {
  id: string;
  serviceName?: string;
  slug?: string;

  // Relationships
  serviceModelPrices?: ServiceModelPrice[];
} 