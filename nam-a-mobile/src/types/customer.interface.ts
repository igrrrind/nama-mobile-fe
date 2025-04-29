import { Cart } from './cart.interface';
import { Feedback } from './feedback.interface';
import { ServiceRequest } from './service-request.interface';
import { Order } from './order.interface';

export interface Customer {
  id?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;

  // Relationships
  carts?: Cart[];
  feedbacks?: Feedback[];
  serviceRequests?: ServiceRequest[];
  orders?: Order[];
} 