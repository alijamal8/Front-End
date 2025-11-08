const API_URL = "http://127.0.0.1:8000/api";


export const NewProductService = {
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
};