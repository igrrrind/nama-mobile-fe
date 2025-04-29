
import { AxiosResponse } from "axios";
import axiosClient from "../axiosServer";

// [GET]
const getRequest = async <T>(url: string, showLoading = true): Promise<BaseResponse<T>> => {
  try {
    const res: AxiosResponse<BaseResponse<T>> = await axiosClient.get<BaseResponse<T>>(url);
    return res.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
  finally {
    if (showLoading) console.log("hideLoadingOverlay");
  }
};

// [POST]
const postRequest = async <T>(url: string, payload: unknown, showLoading = true): Promise<BaseResponse<T>> => {
  try {
    const res: AxiosResponse<BaseResponse<T>> = await axiosClient.post<BaseResponse<T>>(url, payload);
    return res.data;
  } finally {
    if (showLoading) console.log("hideLoadingOverlay");
  }
};

// [PUT]
const putRequest = async <T>(url: string, payload: unknown, showLoading = true): Promise<BaseResponse<T>> => {
  try {
    const res = await axiosClient.put<BaseResponse<T>>(url, payload);
    return res.data;
  } finally {
    if (showLoading) console.log("hideLoadingOverlay");
  }
};

// [PATCH]
const patchRequest = async <T>(url: string, payload: unknown, showLoading = true): Promise<BaseResponse<T>> => {
  try {
    const res = await axiosClient.patch<BaseResponse<T>>(url, payload);
    return res.data;
  } finally {
    if (showLoading) console.log("hideLoadingOverlay");
  }
};

// [DELETE]
const deleteRequest = async <T>(url: string, showLoading = true): Promise<BaseResponse<T>> => {
  try {
    const res = await axiosClient.delete<BaseResponse<T>>(url);
    return res.data;
  } finally {
    if (showLoading) console.log("hideLoadingOverlay");
  }
};

export {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
};
