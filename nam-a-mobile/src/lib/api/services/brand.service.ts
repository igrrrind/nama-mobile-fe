import { Brand } from "@/types/brand.interface";
import { getRequest, postRequest, putRequest, deleteRequest } from "./base.service";
import { BRAND_API } from "@/constants/api/brand";

export const brandService = {
  getBrands: async () => {
    return getRequest<Brand[]>(BRAND_API.GET_ALL);
  },

  createBrand: async (data: Partial<Brand>) => {
    return postRequest<Brand>(BRAND_API.CREATE, data);
  },

  getBrandByName: async (name: string) => {
    return getRequest<Brand[]>(BRAND_API.GET_BY_NAME(name));
  },

  getBrandByBrand: async (brandId: string) => {
    return getRequest<Brand[]>(BRAND_API.GET_BY_BRAND(brandId));
  },

  getBrandById: async (id: string) => {
    return getRequest<Brand>(BRAND_API.GET_BY_ID(id));
  },

  updateBrandById: async (id: string, data: Partial<Brand>) => {
    return putRequest<Brand>(BRAND_API.UPDATE_BY_ID(id), data);
  },

  deleteBrandById: async (id: string) => {
    return deleteRequest<void>(BRAND_API.DELETE_BY_ID(id));
  },

  getBrandBySlug: async (slug: string) => {
    return getRequest<Brand>(BRAND_API.GET_BY_SLUG(slug));
  },
};
