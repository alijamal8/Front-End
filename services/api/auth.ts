import { LoginForm, RegisterForm } from "@/types/auth";
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
      window.location.href = "/login";

      toast.success("Register Successfull ");
    } catch (error: any) {
      if (error.response.data.errors.phone) {
        toast.error(error.response.data.errors.phone[0]);
      } else if (error.response.data.errors.email) {
        toast.error(error.response.data.errors.email[0]);
      } else {
        toast.error(
          "An error occurred while registering the user. Please try again"
        );
      }
    }
  },
  async login(form: LoginForm) {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", form, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      toast.success("Login successful ");
      const token = res.data.Token;
      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Login failed, please try again";
      toast.error(message);
    }
  },
};