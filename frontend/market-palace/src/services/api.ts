// src/services/api.ts
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig, // ← 追加
  AxiosResponse,
} from "axios";

// インスタンス生成
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// リクエストインターセプター
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      // InternalAxiosRequestConfig の headers は必ず存在する型なので非 null アサーション不要
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 汎用的な GET/POST/PUT/DELETE
export async function get<T>(
  url: string,
  params?: Record<string, any>
): Promise<T> {
  const response: AxiosResponse<T> = await apiClient.get(url, { params });
  return response.data;
}

export async function post<T>(url: string, data?: any): Promise<T> {
  const response: AxiosResponse<T> = await apiClient.post(url, data);
  return response.data;
}

export async function put<T>(url: string, data?: any): Promise<T> {
  const response: AxiosResponse<T> = await apiClient.put(url, data);
  return response.data;
}

export async function del<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await apiClient.delete(url);
  return response.data;
}
