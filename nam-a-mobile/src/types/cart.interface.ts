import { CartItem } from './cart-item.interface';
import { Customer } from './customer.interface';
import { Order } from './order.interface';
import { CartStatus } from './enums';

export interface Cart {
  id: string;
  customerId: string;
  note?: string;
  createdAt: Date;
  updatedAt: Date;
  status: CartStatus;
  totalPrice: number;

  // Relationships
  cartItems?: CartItem[];
  customer: Customer;
  order?: Order;
} 