import { Model } from "@/types/model.interface";
import { getRequest, postRequest, putRequest, deleteRequest } from "./base.service";
import { MODEL_API } from "@/constants/api/model";

export const modelService = {
  getModels: async (page?: PageReq) => {
    return getRequest<PageinationResult<Model>>(MODEL_API.GET_ALL(page?.page, page?.pageSize));
  },

  createModel: async (data: Partial<Model>) => {
    return postRequest<Model>(MODEL_API.CREATE, data);
  },

  getModelByName: async (name: string) => {
    return getRequest<Model[]>(MODEL_API.GET_BY_NAME(name));
  },

  getModelByBrand: async (brandId: string) => {
    return getRequest<Model[]>(MODEL_API.GET_BY_BRAND(brandId));
  },

  getModelById: async (id: string) => {
    return getRequest<Model>(MODEL_API.GET_BY_ID(id));
  },

  updateModelById: async (id: string, data: Partial<Model>) => {
    return putRequest<Model>(MODEL_API.UPDATE_BY_ID(id), data);
  },

  deleteModelById: async (id: string) => {
    return deleteRequest<void>(MODEL_API.DELETE_BY_ID(id));
  },

  getModelBySlug: async (slug: string) => {
    return getRequest<Model>(MODEL_API.GET_BY_SLUG(slug));
  },
};
