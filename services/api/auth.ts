import { LoginForm, RegisterForm } from "@/types/auth";
import { toast } from "sonner";
import { clearToken, getToken, setToken } from "@/lib/auth/token";
import { apiClient } from "@/services/api/apiClient";
export const authService = {
  async register(form: RegisterForm) {
    try {
      await apiClient.post(
        "http://127.0.0.1:8000/api/register",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          skipAuthLogout: true,
        } as any,
      );
      window.location.href = "/login";

      toast.success("Register Successfull ");
    } catch (error: any) {
      if (error.response.data.errors.phone) {
        toast.error(error.response.data.errors.phone[0]);
      } else if (error.response.data.errors.email) {
        toast.error(error.response.data.errors.email[0]);
      } else {
        toast.error(
          "An error occurred while registering the user. Please try again",
        );
      }
    }
  },
  async login(form: LoginForm) {
    try {
      const res = await apiClient.post("http://127.0.0.1:8000/api/login", form, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        skipAuthLogout: true,
      } as any);
      toast.success("Login successful ");
      const token = res.data.Token;
      setToken(token);
      window.location.href = "/";
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Login failed, please try again";
      toast.error(message);
    }
  },
  async logout() {
    try {
      await apiClient.post("http://127.0.0.1:8000/api/logout", undefined, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        skipAuthLogout: true,
      } as any);
      toast.success("Logout successful ");
      clearToken();
      window.location.href = "/login";
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Logout failed, please try again";
      toast.error(message);
    }
  },

  async getCurrentUser() {
    const token = getToken();

    if (!token) {
      const missingTokenError = new Error("Missing authentication token");
      (missingTokenError as Error & { status?: number }).status = 401;
      throw missingTokenError;
    }

    try {
      const res = await apiClient.get("http://127.0.0.1:8000/api/user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        const unauthorizedError = new Error("Unauthorized");
        (unauthorizedError as Error & { status?: number }).status = 401;
        throw unauthorizedError;
      }

      const message =
        error.response?.data?.message || "Failed to get current user";
      toast.error(message);
      throw error;
    }
  },
};
