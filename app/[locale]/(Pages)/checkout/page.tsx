import type { Metadata } from "next";
import CheckoutPage from "@/components/checkoutPage/CheckoutPage";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

function page() {
  return (
    <CheckoutPage />
  );
}

export default page;
