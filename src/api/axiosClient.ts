// src/api/axiosClient.ts
import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

// Config base URL và timeout (thường để ở .env)
const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
  timeout: 10000, // 10s
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================
// Request Interceptor
// ============================
axiosClient.interceptors.request.use(
  (config) => {
    // Nếu bạn có auth token, gắn vào header
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ============================
// Response Interceptor
// ============================
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    // Xử lý lỗi tập trung
    if (error.response) {
      console.error("API Error:", error.response);
      // ví dụ: token hết hạn
      if (error.response.status === 401) {
        // logout hoặc refresh token
      }
    } else {
      console.error("Network Error:", error);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
