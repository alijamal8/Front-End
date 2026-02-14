"use client";
import React from "react";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
function ShopingCard() {
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Button asChild variant={"ghost"} className="relative">
      <Link href="/shoppingcart">
        <FiShoppingCart />
        <span className="absolute -top-2 -right-1 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center text-sm dark:text-black dark:bg-white">
          {totalItems}
        </span>
      </Link>
    </Button>
  );
}

export default ShopingCard;
