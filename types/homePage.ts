
export interface MyTitleProps {
  title: string;
};
export interface Category{
  id:number,
  title:string,
  image_url:string
  text_color:string
}
export interface Sliders{
  id:number,
  title:string,
  product_id:string
  description:string
  position:string
  text_color:string
  image_url:string
  button_label:string
  is_active:boolean
  display_order:number
}
type Image = {
  id: number;
  product_id: number;
  image_url: string;
  is_main: number;
};

type Brand = {
  id: number;
  name: string;
};

type Category2 = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description?: string;
  brand: Brand;
  brand_id: number;
  category: Category2;
  category_id: number;
  images: Image[];
};


export interface  LeftSideProps  {
  onFilterChange: (categories: string[], brands: string[]) => void;
};