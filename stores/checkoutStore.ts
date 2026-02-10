import { create } from "zustand";

interface shipinfoIn {
  first_name: string;
  last_name: string;
  address: string;
  apartment: string;
  city: string;
  phone_number: string;
  card_number: string;
  card_expiration_date: string;
  card_cvv: string;
}





const shipinfoInitial = {
  first_name: "",
  last_name: "",
  address: "",
  apartment: "",
  city: "",
  phone_number: "",
  card_number: "",
  card_expiration_date: "",
  card_cvv: "",
};
const paymentMethodInitial = "";


interface checkoutStore {
  shipinfoInform: shipinfoIn;
  payment_method: string;
  setshipinfoInform: (field: string, value: string) => void;
  setPaymentMethod: (value: string) => void;
  resetshipinfoInform: () => void;
  resetPaymentMethod: () => void;
}
export const checkoutStore = create<checkoutStore>((set) => ({
  shipinfoInform: shipinfoInitial,
  payment_method: paymentMethodInitial,
  resetPaymentMethod: () => set({ payment_method: paymentMethodInitial }),
  setshipinfoInform: (field, value) =>
    set((state) => ({
      shipinfoInform: { ...state.shipinfoInform, [field]: value },
    })),

  setPaymentMethod: (value) => set((state) => ({ payment_method: value })),
  resetshipinfoInform: () => set({ shipinfoInform: shipinfoInitial }),
}));
