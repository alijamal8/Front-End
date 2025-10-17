import axios from "axios";


const API_URL = "http://127.0.0.1:8000/api";

export const categoryService = {
  async getCategory() {
    const res = await axios.get(`${API_URL}/imageui`);
    return res.data.data;
  },
};
