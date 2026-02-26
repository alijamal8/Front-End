import { toast } from "sonner";
import { apiFetch } from "@/services/api/apiFetch";


const API_URL = "http://localhost:8000/api";

export const OrderService = {
  async createOrder(payload: any) {
    const res = await apiFetch(`${API_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
  const res = await apiFetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      Accept: "application/json",
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
