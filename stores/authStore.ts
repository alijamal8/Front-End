import { create } from "zustand";
import { RegisterForm, LoginForm } from "@/types/auth";

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

  setRegisterForm: (field: keyof RegisterForm, value: string) => void;
  setLoginForm: (field: keyof LoginForm, value: string) => void;

  resetRegisterForm: () => void;
  resetLoginForm: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  registerForm: { ...registerInitial },
  loginForm: { ...loginInitial },

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
}));