"use client";
import React from "react";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "../ui/button";

import { useTranslations } from "next-intl";
import { resolveProductImageUrl } from "@/lib/utils";

export default function LeftCart({ from }: { from: string }) {
  const t = useTranslations("cart");
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const decreasQuantity = useCartStore((state) => state.decreaseQuantity);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IQD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <div className="dark:bg-black bg-white md:bg-[#f8f9fa] sm:p-6 md:p-8 rounded-2xl md:shadow-sm border-0 md:border md:border-gray-100 dark:border-gray-900 w-full mb-10">
      <div className="mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white">
            {t("title_filled")} ({totalItems})
          </h1>
          <Button variant="destructive" className="text-sm sm:text-lg" onClick={() => clearCart()}>
            {t("clear_cart")}
          </Button>
        </div>
        
        <div className="space-y-6">
          {cart.map((item) => (
            <Link key={item.id} href={`/prodcuts/${from}/${item.id}`} className="block">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 border-b border-gray-200 dark:border-gray-800 relative bg-white dark:bg-black p-4 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none">
                
                {/* Mobile Top Part: Image + Details + Remove button */}
                <div className="flex gap-4 items-start w-full sm:w-auto">
                  <div className="h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 border dark:border-gray-800">
                    <Image
                      src={resolveProductImageUrl(item.images[0]?.image_url)}
                      alt={item.name}
                      width={128}
                      height={128}
                      unoptimized
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col gap-1 sm:gap-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base sm:text-xl font-semibold leading-snug dark:text-[#f8f9fa] text-black line-clamp-2">
                        {item.name}
                      </h3>
                      <button
                        onClick={(e) => { e.preventDefault(); removeFromCart(item.id); }}
                        className="sm:hidden text-gray-400 hover:text-red-500 transition-colors p-1 flex-shrink-0"
                        title="Remove Item"
                      >
                        <X size={20} className="font-bold" />
                      </button>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      Tecno Camon 40 Premier 5G - Dual SIM - 6.67 Inch - AMOLED 144 Hz - MediaTek Dimensity 8350 Ultimate - 5100 mAh
                    </p>
                    
                    <p className="text-base sm:text-xl font-bold text-green-600 dark:text-green-500 mt-1 sm:mt-0">
                      {priceFormatter.format(item.price)}
                    </p>
                  </div>
                </div>

                {/* Desktop controls & Price */}
                <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-start w-full sm:w-auto mt-2 sm:mt-0 gap-4 sm:ml-auto">
                  
                  <button
                    onClick={(e) => { e.preventDefault(); removeFromCart(item.id); }}
                    className="hidden sm:block text-gray-400 cursor-pointer hover:text-red-500 transition-transform duration-300 hover:rotate-90"
                    title="Remove Item"
                  >
                    <X size={24} className="font-bold" />
                  </button>

                  <div className="flex items-center gap-2 sm:gap-3 sm:mt-4">
                    <button
                      onClick={(e) => { e.preventDefault(); decreasQuantity(item.id); }}
                      className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black transition-colors hover:text-red-500 hover:border-red-500 cursor-pointer text-black dark:text-white shadow-sm"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 sm:w-10 text-center text-sm sm:text-base font-semibold text-black dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={(e) => { e.preventDefault(); addToCart(item, 1); }}
                      className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black transition-colors cursor-pointer hover:text-green-500 hover:border-green-500 text-black dark:text-white shadow-sm"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-base sm:text-lg font-bold dark:text-[#f8f9fa] text-black sm:mt-8">
                    {priceFormatter.format(item.price * item.quantity)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
