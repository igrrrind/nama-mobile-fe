import { Cart } from './cart.interface';
import { Customer } from './customer.interface';
import { OrderStatus } from './enums';

export interface Order {
  id: string;
  customerId: string;
  cartId: string;
  orderDate: Date;
  pickupDate: Date;
  status: OrderStatus;
  note?: string;
  totalPrice: number;

  // Relationships
  cart: Cart;
  customer: Customer;
} 