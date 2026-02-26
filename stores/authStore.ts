import { create } from "zustand";
import { AuthUser, LoginForm, RegisterForm } from "@/types/auth";
import { authService } from "@/services/api/auth";
import { clearToken, getToken } from "@/lib/auth/token";

const registerInitial: RegisterForm = {
  name: "",
  phone: "",
  email: "",
  password: "",
};

const loginInitial: LoginForm = {
  email: "",
  password: "",
};

interface AuthStore {
  registerForm: RegisterForm;
  loginForm: LoginForm;
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isHydrated: boolean;

  setRegisterForm: (field: keyof RegisterForm, value: string) => void;
  setLoginForm: (field: keyof LoginForm, value: string) => void;

  resetRegisterForm: () => void;
  resetLoginForm: () => void;
  fetchCurrentUser: () => Promise<AuthUser | null>;
  hydrateFromStorage: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  registerForm: { ...registerInitial },
  loginForm: { ...loginInitial },
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isHydrated: false,

  setRegisterForm: (field, value) =>
    set((state) => ({
      registerForm: { ...state.registerForm, [field]: value },
    })),

  setLoginForm: (field, value) =>
    set((state) => ({
      loginForm: { ...state.loginForm, [field]: value },
    })),

  resetRegisterForm: () => set({ registerForm: { ...registerInitial } }),
  resetLoginForm: () => set({ loginForm: { ...loginInitial } }),

  fetchCurrentUser: async () => {
    try {
      const user = await authService.getCurrentUser();

      set({
        user,
        isAuthenticated: true,
      });

      return user;
    } catch {
      if (getToken()) {
        useAuthStore.getState().logout();
      } else {
        set({
          user: null,
          isAuthenticated: false,
        });
      }

      return null;
    }
  },

  hydrateFromStorage: async () => {
    set({ isLoading: true });

    try {
      const token = getToken();

      if (!token) {
        set({
          user: null,
          isAuthenticated: false,
        });
        return;
      }

      await useAuthStore.getState().fetchCurrentUser();
    } finally {
      set({
        isHydrated: true,
        isLoading: false,
      });
    }
  },

  logout: () => {
    clearToken();
    set({
      user: null,
      isAuthenticated: false,
      isHydrated: true,
      isLoading: false,
    });
  },
}));
