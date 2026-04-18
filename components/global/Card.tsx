"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { CardProps } from "@/types/homePage";
import Link from "next/link";
import Rating from "./Rating";
import { useCartStore } from "@/stores/cartStore";
import { FaPlus } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { resolveProductImageUrl } from "@/lib/utils";
const a = false;




function Card({ product, from }: CardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const decreasQuantity = useCartStore((state) => state.decreaseQuantity);
  const a = false;
  const t = useTranslations("cart");
  const formatIQD = (price: number) => {
    return price.toLocaleString("en-US") + " IQD";
  };





  return (
    <>
      {product?.map((item, index) => {
        const cartItem = cart.find((c) => c.id === item.id);
        const imagePath = item.images?.[0]?.image_url;
        const imageSrc = imagePath
          ? resolveProductImageUrl(imagePath)
          : "/114eaa3c703c5b5cd9ae491b74204914.webp";

        return (
          <div className="cursor-pointer" id="card" key={item.id}>
            <Link href={`/product/${from}/${item.id}`}>
              <div className="bg-gray-100 h-[350px] w-[350px] rounded-md p-8 relative group">
                <Image
                  alt={item.name}
                  width={350}
                  height={350}
                  quality={80}
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-contain max-h-[290px] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                  src={imageSrc}
                />

                <div className="absolute right-4 top-4">
                  <Button
                    variant="outline"
                    className="rounded-full cursor-pointer dark:bg-white"
                  >
                    {a === false ? (
                      <FaRegHeart className="text-black" />
                    ) : (
                      <FaHeart />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pt-4 pb-2 max-sm:flex-col max-sm:gap-2">
                <h1 className="font-bold text-xl leading-snug max-sm:text-lg">
                  {item.name}
                </h1>
                <p className="shrink-0 font-bold text-xl whitespace-nowrap max-sm:text-lg">
                  {formatIQD(item.price)}
                </p>
              </div>
            </Link>

            <div className="max-w-[400px] flex flex-col gap-4">
              <p className="text-sm max-w-[350px] min-h-[60px] overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                {item.description}
              </p>
              <Rating rate={item.rating} />

              {!cartItem ? (
                <Button
                  onClick={() => addToCart(item, 1)}
                  className="border-black rounded-2xl px-34 py-5"
                  variant="outline"
                >
                  {t("Add to Cart")}
                </Button>
              ) : (
                <div className="flex justify-between items-center w-full">
                  <Button
                    className="cursor-pointer w-[45%]"
                    onClick={() =>
                      updateQuantity(cartItem.id, cartItem.quantity + 1)
                    }
                  >
                    <FaPlus className="size-6" />
                  </Button>

                  <Button
                    className="cursor-pointer w-[45%]"
                    onClick={() => decreasQuantity(cartItem.id)}
                  >
                    <MdDeleteOutline className="text-red-500 size-6" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
