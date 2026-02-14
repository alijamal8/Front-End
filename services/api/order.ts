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
};
