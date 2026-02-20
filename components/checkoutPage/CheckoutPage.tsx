"use client";
import { useState } from "react";
import { Truck, Store, Info } from "lucide-react";
import { Button } from "../ui/button";
import RightSide from "./RightSide";
import PickupForm from "./PickupForm";
import ShipForm from "./ShipForm";
import { checkoutStore } from "@/stores/checkoutStore";
import { useCartStore } from "@/stores/cartStore";
import React from "react";
import { OrderService } from "@/services/api/order";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

export default function CheckoutPage() {
  const t = useTranslations("checkout");
  const [deliveryMethod, setDeliveryMethod] = useState<"ship" | "pickup">(
    "ship",
  );
  const { resetshipinfoInform, shipinfoInform, payment_method } =
    checkoutStore();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  function handleCheckout() {
    const items = cart.map(({ id, quantity }) => ({
      product_id: id,
      quantity,
    }));

    const payload = {
      items,
      shipping: shipinfoInform,
      payment_method: payment_method,
      payment_status: payment_method === "card" ? "paid" : "pending",
    };
    OrderService.createOrder(payload);
    resetshipinfoInform();
    clearCart();
    redirect("/orders");
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                {t("delivery_title")}
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() => setDeliveryMethod("ship")}
                  className={`flex w-full items-center justify-between rounded-md border-2 px-4 py-3 transition-all ${
                    deliveryMethod === "ship"
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950"
                      : "border-gray-300 bg-white hover:border-gray-400 dark:border-gray-700 dark:bg-black"
                  }`}
                >
                  <span className="font-medium">{t("ship")}</span>
                  <Truck className="h-5 w-5 text-cyan-600" />
                </button>

                <button
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`flex w-full items-center justify-between rounded-md border-2 px-4 py-3 transition-all ${
                    deliveryMethod === "pickup"
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950"
                      : "border-gray-300 bg-white hover:border-gray-400 dark:border-gray-700 dark:bg-black"
                  }`}
                >
                  <span className="font-medium">{t("pickup")}</span>
                  <Store className="h-5 w-5" />
                </button>
              </div>

              <select className="mt-4 w-full rounded-md border px-4 py-3">
                <option>{t("country_iraq")}</option>
              </select>

              {deliveryMethod === "pickup" ? <PickupForm /> : <ShipForm />}

              <Button
                type="button"
                onClick={handleCheckout}
                className="mt-5 w-full p-6 text-xl"
              >
                {t("place_order")}
              </Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 h-fit">
            <RightSide deliveryMethod={deliveryMethod} />
          </div>
        </div>
      </div>
    </div>
  );
}
