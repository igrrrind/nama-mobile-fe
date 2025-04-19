import { Customer } from './customer.interface';
import { ServiceDetail } from './service-detail.interface';
import { Feedback } from './feedback.interface';
import { ServiceStatus } from './enums';

export interface ServiceRequest {
  id: string;
  customerId: string;
  serviceDetailId: string;
  requestDate: Date;
  estimatedCompletionDate: Date;
  status: ServiceStatus;
  note?: string;
  totalPrice: number;

  // Relationships
  customer: Customer;
  serviceDetail: ServiceDetail;
  feedbacks?: Feedback[];
} 