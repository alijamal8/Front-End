import { mockSliders } from "@/lib/mockData";
const API_URL = "http://127.0.0.1:8000/api";

export const sliserService = {
  async getSliders() {
    return mockSliders; // Mocked for Vercel
    const res = await fetch(`${API_URL}/sliders`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch slider data");
    }

    const data = await res.json();
    return data.data;
  },
};
