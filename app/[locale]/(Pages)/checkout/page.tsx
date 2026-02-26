import type { Metadata } from "next";
import CheckoutPage from "@/components/checkoutPage/CheckoutPage";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

function page() {
  return (
    <ProtectedRoute>
      <CheckoutPage />
    </ProtectedRoute>
  );
}

export default page;
