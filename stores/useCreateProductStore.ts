import { create } from "zustand";

interface CreateProductState {
  setIsNew: (value: boolean) => void;
  setIsGaming: (value: boolean) => void;
  setIsFeatured: (value: boolean) => void;
  rating: any;
  setMainImage: any;
  updateImageColor: any;
  is_featured: boolean;
  is_gaming: boolean;
  is_new: boolean;
  price: any;
  stock: any;
  // Basic product info
  name: string;
  description: string;
  brand_id: string;
  category_id: string;

  // Dynamic data
  specifications: Array<{ id: number; name: string; value: string }>;
  variants: Array<{ id: number; storage: string; price: string }>;
  images: Array<{
    preview: string | Blob | undefined;
    id: number;
    file: File;
    is_main: boolean;
    color_name: string;
    color_hex: string;
  }>;

  // Actions
  setField: (field: string, value: string | boolean | number) => void;
  addSpecification: () => void;
  updateSpecification: (id: number, field: string, value: string) => void;
  removeSpecification: (id: number) => void;
  addVariant: () => void;
  updateVariant: (id: number, field: string, value: string) => void;
  removeVariant: (id: number) => void;
  addImage: (file: File) => void;
  removeImage: (id: number) => void;
  resetProduct: () => void;
}

const initialState = {
  // Basic product info
  name: "",
  description: "",
  stock: "",
  price: "",
  is_featured: false,
  is_gaming: false,
  is_new: false,
  brand_id: "",
  category_id: "",
  rating: "",

  // Dynamic data
  specifications: [], // [{ id, name, value }]
  variants: [], // [{ id, ram, storage, price, stock }]
  images: [], // [{ id, file, preview }]
};

export const useCreateProductStore = create<CreateProductState>((set, get) => ({
  ...initialState,

  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),

  addSpecification: () =>
    set((state) => ({
      specifications: [
        ...state.specifications,
        { id: Date.now(), name: "", value: "" },
      ],
    })),

  updateSpecification: (id, field, value) =>
    set((state) => ({
      specifications: state.specifications.map((spec) =>
        spec.id === id ? { ...spec, [field]: value } : spec,
      ),
    })),

  removeSpecification: (id) =>
    set((state) => ({
      specifications: state.specifications.filter((spec) => spec.id !== id),
    })),
    setIsFeatured: (value: boolean) =>
  set((state) => ({ ...state, is_featured: value })),
  setIsGaming: (value: boolean) =>
  set((state) => ({ ...state, is_gaming: value })),
  setIsNew: (value: boolean) =>
  set((state) => ({ ...state, is_new: value })),


  addVariant: () =>
    set((state) => ({
      variants: [
        ...state.variants,
        {
          id: Date.now(),
          storage: "",
          price: "",
        },
      ],
    })),

  updateVariant: (id, field, value) =>
    set((state) => ({
      variants: state.variants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant,
      ),
    })),

  removeVariant: (id) =>
    set((state) => ({
      variants: state.variants.filter((variant) => variant.id !== id),
    })),

 

  addImage: (file:File) => {
    const preview = URL.createObjectURL(file);

    
    set((state) => ({
      images: [
        ...state.images,
        {
          id: Date.now(),
          file,
          preview,
          is_main: state.images.length === 0,
          color_name: "",
          color_hex: "",
        },
      ],
    }));
  },

  setMainImage: (id: number) =>
    set((state) => ({
      images: state.images.map((img) => ({
        ...img,
        is_main: img.id === id,
      })),
    })),

  updateImageColor: (id: number, field: any, value: any) =>
    set((state) => ({
      images: state.images.map((img) =>
        img.id === id ? { ...img, [field]: value } : img,
      ),
    })),
  removeImage: (id: number) =>
    set((state) => ({
      images: state.images.filter((img) => img.id !== id),
    })),

  
  resetProduct: () => set(initialState),
}));
