import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import handleError from "./error";

// Create axios instance
export const axiosClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  withCredentials: true, // 🔥 allow cookies to be sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    handleError(error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    handleError(error);

    const message = (error.response?.data as BaseResponse)?.message;
    if (message?.includes("is not exists.")) {
      localStorage.setItem("isNotExist", "true");
    } else {
      localStorage.setItem("isNotExist", "");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
