import { Product, Category, Sliders } from "@/types/homePage";

export const mockCategories: Category[] = [
  { id: 1, title: "Laptops", image_url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop", text_color: "#ffffff" },
  { id: 2, title: "Smartphones", image_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop", text_color: "#000000" },
  { id: 3, title: "Accessories", image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop", text_color: "#333333" }
];

export const mockSliders: Sliders[] = [
  {
    id: 1,
    title: "Summer Sale",
    product_id: "1",
    description: "Get the best deals this summer on all electronics.",
    position: "center",
    text_color: "#ffffff",
    image_url: "https://images.unsplash.com/photo-1550009158-9ebf6d17368e?q=80&w=2001&auto=format&fit=crop",
    button_label: "Shop Now",
    is_active: true,
    display_order: 1
  }
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    quantity: 15,
    type: "smartphone",
    rating: 4.9,
    description: "AI powered smartphone.",
    brand: { id: 2, name: "Samsung" },
    brand_id: 2,
    is_new: 1,
    is_gaming: 1,
    is_featured: 1,
    category: { id: 2, name: "Smartphones" },
    category_id: 2,
    images: [{ id: 1, product_id: 1, image_url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop", is_main: 1, color_name: "Titanium Black", color_hex: "#000000" }],
    variants: [{ id: 1, product_id: 1, storage: 512, price: 1299, is_main: 1 }],
    specifications: [{ id: 1, product_id: 1, name: "Chip", value: "Snapdragon 8 Gen 3", is_main: 1 }]
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    quantity: 20,
    type: "smartphone",
    rating: 4.8,
    description: "Titanium design.",
    brand: { id: 1, name: "Apple" },
    brand_id: 1,
    is_new: 1,
    is_gaming: 0,
    is_featured: 1,
    category: { id: 2, name: "Smartphones" },
    category_id: 2,
    images: [{ id: 2, product_id: 2, image_url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop", is_main: 1, color_name: "Titanium", color_hex: "#878681" }],
    variants: [{ id: 2, product_id: 2, storage: 256, price: 999, is_main: 1 }],
    specifications: [{ id: 2, product_id: 2, name: "Chip", value: "A17 Pro", is_main: 1 }]
  },
  {
    id: 3,
    name: "iPad Pro 12.9",
    price: 1099,
    quantity: 10,
    type: "tablet",
    rating: 4.9,
    description: "The ultimate iPad experience.",
    brand: { id: 1, name: "Apple" },
    brand_id: 1,
    is_new: 1,
    is_gaming: 0,
    is_featured: 1,
    category: { id: 4, name: "Tablets" },
    category_id: 4,
    images: [{ id: 3, product_id: 3, image_url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2025&auto=format&fit=crop", is_main: 1, color_name: "Space Gray", color_hex: "#535150" }],
    variants: [{ id: 3, product_id: 3, storage: 256, price: 1099, is_main: 1 }],
    specifications: [{ id: 3, product_id: 3, name: "Chip", value: "M2", is_main: 1 }]
  },
  {
    id: 4,
    name: "Samsung Galaxy Tab S9",
    price: 799,
    quantity: 8,
    type: "tablet",
    rating: 4.7,
    description: "Premium Android tablet.",
    brand: { id: 2, name: "Samsung" },
    brand_id: 2,
    is_new: 1,
    is_gaming: 0,
    is_featured: 0,
    category: { id: 4, name: "Tablets" },
    category_id: 4,
    images: [{ id: 4, product_id: 4, image_url: "https://images.unsplash.com/photo-1588702545922-77eb872921d2?q=80&w=2073&auto=format&fit=crop", is_main: 1, color_name: "Graphite", color_hex: "#4b4b4b" }],
    variants: [{ id: 4, product_id: 4, storage: 128, price: 799, is_main: 1 }],
    specifications: [{ id: 4, product_id: 4, name: "Display", value: "AMOLED", is_main: 1 }]
  }
];
