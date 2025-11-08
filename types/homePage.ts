
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
export interface Product{
  id:number,
  name:string,
  image_url:string
  rating:number
  price:number
  category: { name: string };
  brand: { name: string };
}

export interface  LeftSideProps  {
  onFilterChange: (categories: string[], brands: string[]) => void;
};