"use client";
import React from "react";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "../ui/button";

import { useTranslations } from "next-intl";

export default function LeftCart({ from }: { from: string }) {
  const t = useTranslations("cart");
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const decreasQuantity = useCartStore((state) => state.decreaseQuantity);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div className="min-h-screen dark:bg-black bg-[#f8f9fa] md:p-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          {t("title_filled")} ({totalItems})
          <Button className="float-right text-lg rtl:float-left" onClick={() => clearCart()}>
            {t("clear_cart")}
          </Button>
        </h1>
        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          <div className="space-y-8">
            {cart.map((item) => (
              <Link key={item.id} href={`/prodcuts/${from}/${item.id}`}>
                <div className="flex items-start gap-6 pb-6">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-12 text-gray-400 cursor-pointer hover:text-red-500 transition-transform duration-300 hover:rotate-90"
                  >
                    <X size={25} className="font-bold" />
                  </button>

                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
                    <Image
                      src={`http://localhost:8000/storage/${item.images[0].image_url.replace(/^\/+/, "")}`}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-xl font-semibold leading-snug dark:text-[#f8f9fa] text-black ">
                      {item.name}
                    </h3>

                    <p className="text-xl font-semibold dark:text-[#f8f9fa] text-black ">
                      Tecno Camon 40 Premier 5G - Dual SIM - 6.67 Inch - AMOLED
                      144 Hz - MediaTek Dimensity 8350 Ultimate - 5100 mAh
                    </p>
                    <p className="text-xl font-semibold dark:text-[#f8f9fa] text-black ">
                      {item.price} IQD
                    </p>
                  </div>

                  <div className="flex items-center mt-12 gap-3">
                    <button
                      onClick={() => decreasQuantity(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded border  transition-colors hover:text-red-500 cursor-pointer "
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center text-base font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="flex h-10 w-10 items-center justify-center rounded border transition-colors cursor-pointer hover:text-green-500"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="w-36 text-right text-lg font-semibold mt-14 dark:text-[#f8f9fa] text-black ">
                    {item.price * item.quantity} IQD
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
