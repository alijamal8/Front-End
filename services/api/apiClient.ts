import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getToken } from "@/lib/auth/token";
import { handleUnauthorized } from "@/services/api/authSession";

type ApiRequestConfig = InternalAxiosRequestConfig & {
  skipAuthLogout?: boolean;
};

export const apiClient = axios.create();

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();

  if (!token) {
    return config;
  }

  const headers = config.headers;

  if (!(headers as Record<string, unknown>).Authorization) {
    (headers as Record<string, unknown>).Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const requestConfig = error.config as ApiRequestConfig | undefined;

    if (error.response?.status === 401 && !requestConfig?.skipAuthLogout) {
      handleUnauthorized();
    }

    return Promise.reject(error);
  },
);
