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
  return (
    <div className="min-h-screen dark:bg-black bg-[#f8f9fa] md:p-12">
      <div className=" space-y-8 ">
        <h1 className="mb-8 text-2xl font-bold text-black dark:text-white">
          {t("summary_title")}
        </h1>
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("subtotal")}</p>
          <p className="text-black text-xl dark:text-white">{totalPrice + 5000} IQD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("shipping")}</p>
          <p className="text-black text-xl dark:text-white">5,000 IQD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("you_saved")}</p>
          <p className="text-black text-xl dark:text-white">0 IQD</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="text-black text-xl dark:text-white">{t("total")}</p>
          <p className="text-black text-xl dark:text-white">{totalPrice + 5000} IQD</p>
        </div>
        <Button asChild className="text-white text-lg w-full mt-10 dark:text-black">
          <Link href="/checkout">{t("checkout")}</Link>
        </Button>
      </div>
    </div>
  );
}

export default RightCart;
