import { Service } from './service.interface';
import { Model } from './model.interface';
import { ServiceRequest } from './service-request.interface';
import { ServiceDetail } from './service-detail.interface';

export interface ServiceModelPrice {
  id: string;
  serviceId: string;
  modelId: string;
  price: number;

  // Relationships
  service?: Service;
  model?: Model;
  serviceRequests?: ServiceRequest[];
  serviceDetails?: ServiceDetail[];
} 