import { Component } from './component.interface';

export interface ComponentCategory {
  id: string;
  name?: string;

  // Relationships
  components?: Component[];
} 
