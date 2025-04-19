import { Model } from './model.interface';

export interface Brand {
  id: string;
  name?: string;

  // Relationships
  models?: Model[];
} 