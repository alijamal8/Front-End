import { apiClient } from "@/services/api/apiClient";
import { mockCategories } from "@/lib/mockData";

const API_URL = "http://127.0.0.1:8000/api";

export const categoryService = {
  async getCategory() {
    return mockCategories; // Mocked
    const res = await apiClient.get(`${API_URL}/imageui`, {
      skipAuthLogout: true,
    } as any);
    return res.data.data;
  },
};
