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
  return (
    <div className="min-h-screen dark:bg-black bg-[#f8f9fa] md:p-12">
      <div className=" space-y-8 ">
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("subtotal")}</p>
          <p className="text-black text-xl dark:text-white">{totalPrice} IQD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("shipping")}</p>
          <p className="text-black text-xl dark:text-white">
            {deliveryMethod === "ship" ? "5,000 IQD" : "0 IQD"}
          </p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("total")}</p>
          <p className="text-black text-xl dark:text-white">
            {deliveryMethod === "ship" ? totalPrice + 5000 : totalPrice} IQD
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
