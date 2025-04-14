import apiClient, { ApiResponse } from '../client';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export const productService = {
  async getProducts(page = 1, limit = 10): Promise<ApiResponse<ProductsResponse>> {
    const response = await apiClient.get<ApiResponse<ProductsResponse>>(`/products`, {
      params: { page, limit },
    });
    return response.data;
  },

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    const response = await apiClient.get<ApiResponse<Product>>(`/products/${id}`);
    return response.data;
  },

  async searchProducts(query: string): Promise<ApiResponse<ProductsResponse>> {
    const response = await apiClient.get<ApiResponse<ProductsResponse>>(`/products/search`, {
      params: { q: query },
    });
    return response.data;
  },
}; 