import { RegisterForm } from "@/types/auth";
import axios from "axios";
import { toast } from "sonner";
export const authService = {
  async register(form: RegisterForm) {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", form, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      console.log(res.data.data.message);
    } catch (error: any) {
      if (error.response.data.errors.phone) {
        toast(error.response.data.errors.phone[0]);
      } else if (error.response.data.errors.email) {
        toast(error.response.data.errors.email[0]);
      } else {
        toast("An error occurred while registering the user. Please try again");
      }
    }
  },
};
