import { create } from "zustand";
import { Product } from "../types/homePage";

interface ProductFilterState {
  products: Product[];
  filteredProducts: Product[];
  selectedCategories: string[];
  selectedBrands: string[];
  setProducts: (products: Product[]) => void;
  handleFilterChange: (categories: string[], brands: string[]) => void;
  handleCategoryChange: (category: string) => void;
  handleBrandChange: (brand: string) => void;
}

export const useProductFilterStore = create<ProductFilterState>((set, get) => ({
  products: [],
  filteredProducts: [],
  selectedCategories: [],
  selectedBrands: [],

  setProducts: (products) => set({ products, filteredProducts: products }),

  handleFilterChange: (categories, brands) => {
    const products = get().products;
    let result = products;

    if (categories.length)
      result = result.filter((p) => categories.includes(p.category.name));
    if (brands.length)
      result = result.filter((p) => brands.includes(p.brand.name));

    set({ filteredProducts: result });
  },

  handleCategoryChange: (category) => {
    const { selectedCategories, selectedBrands, handleFilterChange } = get();
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    set({ selectedCategories: updated });
    handleFilterChange(updated, selectedBrands);
  },

  handleBrandChange: (brand) => {
    const { selectedBrands, selectedCategories, handleFilterChange } = get();
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    set({ selectedBrands: updated });
    handleFilterChange(selectedCategories, updated);
  },
}));
