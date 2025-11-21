"use client";

import { create } from "zustand";

export interface ProductUIState {
  selectedColor: number;
  selectedImageIndex: number;
  selectedStorage: number;

  setSelectedColor: (index: number) => void;
  setSelectedImageIndex: (index: number) => void;
  setSelectedStorage: (index: number) => void;
}

export const useProductUI = create<ProductUIState>((set) => ({
  selectedColor: 0,
  selectedImageIndex: 0,
  selectedStorage: 0,

  setSelectedColor: (index) =>
    set({
      selectedColor: index,
      selectedImageIndex: index,
    }),

  setSelectedImageIndex: (index) =>
    set({
      selectedImageIndex: index,
    }),

  setSelectedStorage: (index) =>
    set({
      selectedStorage: index,
    }),
}));
