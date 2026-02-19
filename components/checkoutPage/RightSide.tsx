import React, { useMemo } from "react";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/stores/cartStore";
import { useTranslations } from "next-intl";

function RightSide({ deliveryMethod }: { deliveryMethod: "ship" | "pickup" }) {
  const t = useTranslations("cart");
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IQD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <div className="min-h-screen dark:bg-black bg-[#f8f9fa] md:p-12">
      <div className=" space-y-8 ">
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("subtotal")}</p>
          <p className="text-black text-xl dark:text-white">
            {priceFormatter.format(totalPrice)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("shipping")}</p>
          <p className="text-black text-xl dark:text-white">
            {deliveryMethod === "ship"
              ? priceFormatter.format(5000)
              : priceFormatter.format(0)}
          </p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("total")}</p>
          <p className="text-black text-xl dark:text-white">
            {deliveryMethod === "ship"
              ? priceFormatter.format(totalPrice + 5000)
              : priceFormatter.format(totalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
