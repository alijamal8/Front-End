
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