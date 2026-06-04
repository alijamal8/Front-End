import { mockProducts } from "@/lib/mockData";
const API_URL = "http://localhost:8000/api";

type SearchProductsResponse<T> = T[] | { data?: T[] };

function normalizeProductsResponse<T>(response: SearchProductsResponse<T>): T[] {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  return [];
}

export const ProductsService = {
  async getNewProduct(type: string) {
    return mockProducts; // Mocked
    const res = await fetch(`${API_URL}/products?type=${type}`, {
      next: { revalidate: 60 },
    });
    //edit type make  it dynmic
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  },

  async getSingleProduct(id: string) {
    return mockProducts[0]; // Mocked
    const res = await fetch(`${API_URL}/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  },

  async getCategoryProduct(category: string) {
    return mockProducts; // Mocked
    const res = await fetch(`${API_URL}/products?category=${category}`, {
      next: { revalidate: 60 },
    });
    //edit type make  it dynmic
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  },

  async searchProducts(query: string) {
    return mockProducts; // Mocked
    const res = await fetch(`${API_URL}/products/search?q=${encodeURIComponent(query)}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return normalizeProductsResponse(data);
  },
};
