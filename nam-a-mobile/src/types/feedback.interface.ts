import { Customer } from './customer.interface';
import { Model } from './model.interface';
import { ServiceRequest } from './service-request.interface';

export interface Feedback {
  id: string;
  customerId: string;
  modelId?: string; // optional
  serviceRequestId?: string; // optional
  rating: number;
  comment?: string;
  createdAt: Date;
  imageUrl?: string;
  isVisible: boolean;

  // Relationships
  customer?: Customer;
  model?: Model;
  serviceRequest?: ServiceRequest;
} 