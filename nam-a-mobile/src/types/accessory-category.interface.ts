import { Accessory } from './accessory.interface';

export interface AccessoryCategory {
  id: string;
  name: string;

  // Relationships
  accessories?: Accessory[];
} 