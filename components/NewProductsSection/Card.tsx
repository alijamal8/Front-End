"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import Rating from "./Rating";
import { FaHeart } from "react-icons/fa";
import { CardProps, Product } from "@/types/homePage";
import Link from "next/link";

const a = false;

function Card({ product,from }: CardProps) {
  return (
    <>
      {product.map((item) => (
        <div className="cursor-pointer" id="card" key={item.id}>
          <Link href={`/prodcuts/${from}/${item.id}`}>
            <div className="bg-gray-100 h-[350px] w-[350px] rounded-md p-8 relative group ">
              <Image
                alt="dd"
                width={350}
                height={350}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-contain max-h-[290px] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                src={`http://localhost:8000/${item.images[0].image_url.replace(/^\/+/, '')}`}
              />
              {/*`http://localhost:8000${item.images[0].image_url}`|| */}

              <div className="absolute right-4 top-4">
                <Button
                  variant={"outline"}
                  className="rounded-full cursor-pointer  dark:bg-white"
                >
                  {a === false ? (
                    <FaRegHeart className="text-black" />
                  ) : (
                    <FaHeart />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex justify-between pt-4 pb-2">
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p className="font-bold text-xl">{item.price}$</p>
            </div>
          </Link>
          <div className="max-w-[400px] items-start flex flex-col gap-4">
            <p className="text-sm max-w-[350px]">
              features powerful performance
            </p>
            <Rating rate={item.rating} />
            <Button
              className="border-black rounded-2xl px-6"
              variant={"outline"}
            >
              Add to Card
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
