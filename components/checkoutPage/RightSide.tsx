import React, { useMemo } from "react";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/stores/cartStore";

function RightSide({ deliveryMethod }: { deliveryMethod: "ship" | "pickup" }) {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );
  return (
    <div className="min-h-screen dark:bg-black bg-[#f8f9fa] md:p-12">
      <div className=" space-y-8 ">
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">Subtotal</p>
          <p className="text-black text-xl dark:text-white">{totalPrice} IQD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">Shipping</p>
          <p className="text-black text-xl dark:text-white">
            {deliveryMethod === "ship" ? "5,000 IQD" : "0 IQD"}
          </p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">Total</p>
          <p className="text-black text-xl dark:text-white">
            {deliveryMethod === "ship" ? totalPrice + 5000 : totalPrice} IQD
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
