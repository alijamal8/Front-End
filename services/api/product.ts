const API_URL = "http://localhost:8000/api";

export const ProductsService = {
  async getNewProduct(type: string) {
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
    const res = await fetch(`${API_URL}/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  },

  async getCategoryProduct(category: string) {
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
};
