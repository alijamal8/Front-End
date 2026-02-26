import { apiClient } from "@/services/api/apiClient";


const API_URL = "http://127.0.0.1:8000/api";

export const categoryService = {
  async getCategory() {
    const res = await apiClient.get(`${API_URL}/imageui`, {
      skipAuthLogout: true,
    } as any);
    return res.data.data;
  },
};
