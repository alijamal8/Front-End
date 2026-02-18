import { toast } from "sonner";


const API_URL = "http://localhost:8000/api";

export const OrderService = {
  async createOrder(payload: any) {
    const res = await fetch(`${API_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message);
      throw error;
    }

    toast.success("تم إنشاء الطلب بنجاح");
    return await res.json();
  },








async getOrders() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    let errorMsg = "Failed to fetch orders";
    try {
      const error = await res.json();
      errorMsg = error?.message ?? errorMsg;
    } catch {}
    toast.error(errorMsg);
    throw new Error(errorMsg);
  }

  return res.json();
}



  
};
