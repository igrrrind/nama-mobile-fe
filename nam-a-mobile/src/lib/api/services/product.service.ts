import { Product } from "@/types/product.interface";
import { getRequest } from "./base.service";
import { PRODUCT_API } from "@/constants/api/product";

export const productService = {
  getProducts: async () => {
      return getRequest<PageinationResult<Product>>(PRODUCT_API.GET_ALL);
  },
  getProduct: async (slug: string) => {
      return getRequest<Product>(PRODUCT_API.GET_SLUG(slug))
  }
}; 