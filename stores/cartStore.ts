"use client";
import { create } from "zustand";
import { persist, createJSONStorage, type StateStorage } from "zustand/middleware";
import { Product } from "@/types/homePage";


const noopStorage: StateStorage = {
  getItem: (_name) => null,
  setItem: (_name, _value) => {},
  removeItem: (_name) => {},
};

interface CartState {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, quantity) => {
        const cart = get().cart;
        const exists = cart.find((item) => item.id === product.id);

        if (exists) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity }],
          });
        }
      },

      removeFromCart: (id: number) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      decreaseQuantity: (id: number) => {
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },

      updateQuantity: (id: number, quantity: number) => {
        if (quantity < 1) return;
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        });
      },

      clearCart: () => set({ cart: [] }),

      totalPrice: () =>
        get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : noopStorage
      ),
    },
  ),
);
