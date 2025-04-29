import { Accessory } from './accessory.interface';
import { Component } from './component.interface';
import { Product } from './product.interface';
import { ServiceModelPrice } from './service-model-price.interface';
import { Feedback } from './feedback.interface';
import { Brand } from './brand.interface';

export interface Model {
  id: string;
  brandId: string;
  name?: string;
  brandName?: string;
  description?: string;
  slug?: string;

  // Relationships
  accessories?: Accessory[];
  components?: Component[];
  products?: Product[];
  serviceModelPrices?: ServiceModelPrice[];
  feedbacks?: Feedback[];
  brand?: Brand;
} 

//Đang cần 1 hàm getModel