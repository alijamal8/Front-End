export interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterStore {
  form: RegisterForm;
  setForm: (field: keyof RegisterForm, value: string) => void;
  resetForm: () => void;
}

export interface ClientErroprops {
  type: "success" | "error";
  message: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
