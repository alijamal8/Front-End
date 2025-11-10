import { Product } from "@/types/homePage";
import { create } from "zustand";

type RangeObject = { label: string; min: number; max: number };

type Filters = {
  brand: string[];
  price: RangeObject[];
  ram: number[];
  storage: number[];
  camera: RangeObject[];
  battery: RangeObject[];
  displaySize: RangeObject[];
};

type State = {
  products: Product[];
  filtered: Product[];
  filters: Filters;
  setProducts: (prod: any[]) => void;
  toggleBrand: (brand: string) => void;
  togglePrice: (obj: RangeObject) => void;
  toggleRam: (ram: number) => void;
  toggleStorage: (storage: number) => void;
  toggleCamera: (obj: RangeObject) => void;
  toggleBattery: (obj: RangeObject) => void;
  toggleDisplay: (obj: RangeObject) => void;
  applyFilters: () => void;
};

export const usePhonesFilters = create<State>((set, get) => ({
  products: [],
  filtered: [],
  filters: {
    brand: [],
    price: [],
    ram: [],
    storage: [],
    camera: [],
    battery: [],
    displaySize: [],
  },

  setProducts: (prod) => set({ products: prod, filtered: prod }),

  toggleBrand: (brand) => {
    const { filters } = get();
    const exists = filters.brand.includes(brand);
    const newVal = exists ? filters.brand.filter(b => b !== brand) : [...filters.brand, brand];
    set({ filters: { ...filters, brand: newVal } });
    get().applyFilters();
  },

  togglePrice: (obj) => {
    const { filters } = get();
    const exists = filters.price.find(p => p.label === obj.label);
    const newVal = exists ? filters.price.filter(p => p.label !== obj.label) : [...filters.price, obj];
    set({ filters: { ...filters, price: newVal } });
    get().applyFilters();
  },

  toggleRam: (ram) => {
    const { filters } = get();
    const exists = filters.ram.includes(ram);
    const newVal = exists ? filters.ram.filter(r => r !== ram) : [...filters.ram, ram];
    set({ filters: { ...filters, ram: newVal } });
    get().applyFilters();
  },

  toggleStorage: (storage) => {
    const { filters } = get();
    const exists = filters.storage.includes(storage);
    const newVal = exists ? filters.storage.filter(s => s !== storage) : [...filters.storage, storage];
    set({ filters: { ...filters, storage: newVal } });
    get().applyFilters();
  },

  toggleCamera: (obj) => {
    const { filters } = get();
    const exists = filters.camera.find(p => p.label === obj.label);
    const newVal = exists ? filters.camera.filter(p => p.label !== obj.label) : [...filters.camera, obj];
    set({ filters: { ...filters, camera: newVal } });
    get().applyFilters();
  },

  toggleBattery: (obj) => {
    const { filters } = get();
    const exists = filters.battery.find(p => p.label === obj.label);
    const newVal = exists ? filters.battery.filter(p => p.label !== obj.label) : [...filters.battery, obj];
    set({ filters: { ...filters, battery: newVal } });
    get().applyFilters();
  },

  toggleDisplay: (obj) => {
    const { filters } = get();
    const exists = filters.displaySize.find(p => p.label === obj.label);
    const newVal = exists ? filters.displaySize.filter(p => p.label !== obj.label) : [...filters.displaySize, obj];
    set({ filters: { ...filters, displaySize: newVal } });
    get().applyFilters();
  },


  applyFilters: () => {
    const { products, filters } = get();
    let result = [...products];

    const getSpec = (p: any, name: string) => {
      const spec = p.specifications?.find((s: any) => s.name === name);
      return spec ? Number(spec.value) : null;
    };

    if (filters.brand.length)
      result = result.filter(p => filters.brand.includes(p.brand.name));

    if (filters.price.length)
      result = result.filter(p => {
        const priceValue = Number(p.price);
        return filters.price.some(pr => priceValue >= pr.min && priceValue <= pr.max);
      });

    if (filters.ram.length)
      result = result.filter(p => {
        const ramValue = getSpec(p, "ram");
        return ramValue !== null && filters.ram.includes(ramValue);
      });

    if (filters.storage.length)
      result = result.filter(p => {const stValue = getSpec(p, "storage");
        return stValue !== null && filters.storage.includes(stValue);
      });

    if (filters.camera.length)
      result = result.filter(p => {
        const camValue = getSpec(p, "camera");
        return camValue !== null && filters.camera.some(c => camValue >= c.min && camValue <= c.max);
      });

    if (filters.battery.length)
      result = result.filter(p => {
        const batValue = getSpec(p, "battery");
        return batValue !== null && filters.battery.some(b => batValue >= b.min && batValue <= b.max);
      });

    if (filters.displaySize.length)
      result = result.filter(p => {
        const dispValue = getSpec(p, "disply size"); // (نفس spelling)
        return dispValue !== null && filters.displaySize.some(d => dispValue >= d.min && dispValue <= d.max);
      });

    set({ filtered: result });
  },
}));