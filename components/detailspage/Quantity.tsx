"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/types/homePage";

function Quantity({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState("1");
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Quantity</h2>
      <Select value={quantity} onValueChange={setQuantity}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select quantity" />
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
        <Button onClick={() => addToCart(product , Number(quantity))} className="px-10 text-lg">Add to Card</Button>
        <Button className="px-13 text-lg">Buy Now</Button>
      </div>
    </div>
  );
}

export default Quantity;
