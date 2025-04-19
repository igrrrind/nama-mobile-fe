import { ServiceRequest } from './service-request.interface';
import { ServiceModelPrice } from './service-model-price.interface';
import { Component } from './component.interface';

export interface ServiceDetail {
  id: string;
  serviceRequestId: string;
  serviceModelPriceId: string;
  componentId: string; // optional

  // Relationships
  serviceRequest?: ServiceRequest;
  serviceModelPrice?: ServiceModelPrice;
  component?: Component; // optional
} 