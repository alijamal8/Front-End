"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaLessThanEqual, FaRegHeart } from "react-icons/fa";
import Rating from "./Rating";
import { FaHeart } from "react-icons/fa";
const product = [
  {
    id: 2,
    image_url: "/241cb672af49e117a2cb9060ce88df5f-removebg-preview.png",
    rating: 5,
  },

  {
    id: 7,
    image_url:
      "/A110AH11_Richimage_TD01_US_V1_41ed3782-6e72-4335-8e1b-41b2fa7b7d35_3838x.webp",
    rating: 5,
  },

  {
    id: 9,
    image_url: "/114eaa3c703c5b5cd9ae491b74204914.webp",
    rating: 5,
  },
  {
    id: 10,
    image_url: "/all-pura80-pro-removebg-preview.png",
    rating: 3,
  },
  {
    id: 11,
    image_url: "/iphone_17pro__0s6piftg70ym_large-removebg-preview.png",
    rating: 4,
  },
  {
    id: 12,
    image_url: "/H655BTPROBlack4-removebg-preview.png",
    rating: 5,
  },
  {
    id: 13,
    image_url: "/20250701175457-removebg-preview.png",
    rating: 5,
  },
  {
    id: 14,
    image_url: "/241cb672af49e117a2cb9060ce88df5f-removebg-preview.png",
    rating: 5,
  },
  // {
  //   id: 15,
  //   image_url: "/3797f60300b41b50afb49f7e169b74a2.jpg",
  //   rating: 5,
  // },
  // {
  //   id: 16,
  //   image_url: "/92b3f6d1676ef39f3200850c5c6342ca-removebg-preview.png",
  //   rating: 5,
  // },
  // {
  //   id: 17,
  //   image_url: "/acb774e31141bb3c84be7d4eabc43993-removebg-preview.png",
  //   rating: 3,
  // },
  // {
  //   id: 18,
  //   image_url: "/b2be274626cf2ff05b07d406687c0334-removebg-preview.png",
  //   rating: 4,
  // },
];

const a = false;

function Card() {
  return (
    <>
      {product.map((item) => (
        <div className="cursor-pointer" id="card" key={item.id}>
          <div className="bg-gray-100 h-[350px] w-[350px] rounded-md p-8 relative group ">
            <Image
              alt="dd"
              width={350}
              height={350}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-contain max-h-[290px] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
              src={item.image_url}
            />

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
            <h1 className="font-bold text-xl">Samsung Galaxy A56</h1>
            <p className="font-bold text-xl">480$</p>
          </div>
          <div className="max-w-[400px] items-start flex flex-col gap-4">
            <p className="text-sm">A Perfect mobile to our live</p>
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
