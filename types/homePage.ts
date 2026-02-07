export interface MyTitleProps {
  title: string;
}
export interface Category {
  id: number;
  title: string;
  image_url: string;
  text_color: string;
}
export interface Sliders {
  id: number;
  title: string;
  product_id: string;
  description: string;
  position: string;
  text_color: string;
  image_url: string;
  button_label: string;
  is_active: boolean;
  display_order: number;
}
type Images = {
  id: number;
  product_id: number;
  image_url: string;
  is_main: number;
  color_name:string;
  color_hex : string
};

type Brand = {
  id: number;
  name: string;
};

type Category2 = {
  id: number;
  name: string;
};
type variants = {
  id: number;
  product_id: number;
  storage: number;
  price: number;
  is_main: number;
};


type Specifications= {
  id: number;
  product_id: number;
  name:string;
  value: string;
  is_main: number;
};

export type Product = {
  quantity: number;
  type: any;
  id: number;
  name: string;
  price: number;
  rating: number;
  description?: string;
  brand: Brand;
  brand_id: number;
  is_new:number
  is_gaming:number
  is_featured:number
  category: Category2;
  category_id: number;
  images: Images[];
  variants: variants[];
  specifications : Specifications[]
};

export interface CardProps
{
  product: Product[];
  from:string
}
export interface LeftSideProps {
  onFilterChange: (categories: string[], brands: string[]) => void;
}

export type ProductImage = {
  file: File;
  is_main: boolean;
  color_name: string;
  color_hex: string;
};