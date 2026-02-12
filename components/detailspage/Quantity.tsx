"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/types/homePage";
import { useTranslations } from "next-intl";

function Quantity({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState("1");
  const addToCart = useCartStore((state) => state.addToCart);
  const t = useTranslations();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {t("productDetails.Quantity")}
      </h2>
      <Select value={quantity} onValueChange={setQuantity}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("productDetails.Quantity")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Array.from({ length: 10 }).map((_, index) => (
              <SelectItem value={(index + 1).toString()} key={index}>
                {index + 1}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex justify-between max-w-sm mt-10">
        <Button
          onClick={() => addToCart(product, Number(quantity))}
          className="px-10 text-lg"
        >
          {t("productDetails.Add to Cart")}
        </Button>
        <Button className="px-13 text-lg">{t("productDetails.Buy Now")}</Button>
      </div>
    </div>
  );
}

export default Quantity;
