import { CartItem } from './cart-item.interface';
import { Model } from './model.interface';
import { Condition } from './condition.interface';
import { Color } from './color.interface';
import { Storage } from './storage.interface';
import { Item } from './Item';

export interface Product extends Item {
  id: string;
  modelId: string;
  conditionId: string;
  colorId: string;
  storageId: string;
  price: number;
  stock: number;

  // Relationships
  cartItems: CartItem[];
  model?: Model;
  condition?: Condition;
  color?: Color;
  storage?: Storage;
} 