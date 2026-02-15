import type { Metadata } from "next";
import CartPage from "@/components/shoppingcartPage/CartPage";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

function page() {
  return (
    <CartPage />
  );
}

export default page;
