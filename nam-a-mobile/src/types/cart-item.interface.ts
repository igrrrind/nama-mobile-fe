import { Cart } from './cart.interface';
import { Product } from './product.interface';

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  price: number;

  // Relationships
  cart?: Cart;
  product?: Product;
} 