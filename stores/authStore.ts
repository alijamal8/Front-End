import { create } from "zustand";
import { RegisterForm } from "@/types/auth";
import { RegisterStore } from "@/types/auth";

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
};

export const useRegisterStore = create<RegisterStore>((set) => ({
  form: { ...initialState },
  setForm: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),

  resetForm: () => set({ form: { ...initialState } }),
}));
