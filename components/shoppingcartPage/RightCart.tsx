"use client";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/cartStore";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";

function RightCart() {
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
    <div className="dark:bg-black bg-[#f8f9fa] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-900 w-full mb-10">
      <div className="space-y-6">
        <h1 className="mb-6 text-2xl font-bold text-black dark:text-white">
          {t("summary_title")}
        </h1>
        <div className="flex justify-between items-center bg-transparent">
          <p className="text-black text-lg sm:text-xl dark:text-white">{t("subtotal")}</p>
          <p className="text-black text-lg sm:text-xl font-semibold dark:text-white">{priceFormatter.format(totalPrice)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black text-lg sm:text-xl dark:text-white">{t("shipping")}</p>
          <p className="text-black text-lg sm:text-xl font-semibold dark:text-white">{priceFormatter.format(5000)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black text-lg sm:text-xl dark:text-white">{t("you_saved")}</p>
          <p className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400">{priceFormatter.format(0)}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center">
          <p className="text-black text-xl font-bold dark:text-white">{t("total")}</p>
          <p className="text-black text-xl font-bold dark:text-white">{priceFormatter.format(totalPrice+5000)}</p>
        </div>
        <Button asChild className="text-white text-lg w-full mt-8 h-12 dark:text-black hover:opacity-90 transition-opacity">
          <Link href="/checkout">{t("checkout")}</Link>
        </Button>
      </div>
    </div>
  );
}

export default RightCart;
