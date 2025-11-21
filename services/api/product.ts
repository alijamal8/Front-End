const API_URL = "http://127.0.0.1:8000/api";

export const ProductsService = {
  async getProducts() {
    const res = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  },

  async getNewProduct() {
    const res = await fetch(`${API_URL}/products?type=new`, {
      next: { revalidate: 60 },
    });

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
};
