export type Order = {
  id: number;
  total_price: number;
  order_status: string;
  created_at: string;
  payment: {
    payment_method: string;
    payment_status: string;
  };
  items: {
    product_name: string;
    quantity: number;
    price: number;
  }[];
};
