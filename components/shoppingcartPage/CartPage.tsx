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
    <div className="px-10 grid grid-cols-[70%_30%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
      <div className="bg-black" id="left">
        <LeftCart from="cart" />
      </div>

      <div className="bg-black" id="right">
        <RightCart />
      </div>
    </div>
  );
}

export default CartPage;
