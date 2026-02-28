"use client";
import React from "react";
import LeftCart from "./LeftCart";
import RightCart from "./RightCart";
import { useCartStore } from "@/stores/cartStore";
import EmptyCart from "./EmptyCart";


function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return totalItems === 0 ? (
    <EmptyCart />
  ) : (
    <div className="px-4 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-10 mt-6 lg:mt-10 max-w-[1600px] mx-auto">
      <div className="flex-1 w-full" id="left">
        <LeftCart from="cart" />
      </div>

      <div className="w-full lg:w-[350px] xl:w-[400px]" id="right">
        <RightCart />
      </div>
    </div>
  );
}

export default CartPage;
