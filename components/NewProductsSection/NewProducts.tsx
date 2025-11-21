import React from "react";
import Title from "../global/Title";
import { Button } from "../ui/button";
import { MdNavigateNext } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import Card from "./Card";
import Link from "next/link";
import { ProductsService } from "@/services/api/product";

export const product2 = [
  {
    id: 7,
    title: "Power Banks",
    price: 23,
    image_url:
      "/A110AH11_Richimage_TD01_US_V1_41ed3782-6e72-4335-8e1b-41b2fa7b7d35_3838x.webp",
    rating: 5,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },

  {
    id: 9,
    title: "Xiaomi 15T Pro",
    price: 1300,
    image_url: "/114eaa3c703c5b5cd9ae491b74204914.webp",
    rating: 5,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },
  {
    id: 10,
    title: "Huawei Pura 80 Pro",
    price: 700,
    image_url: "/all-pura80-pro-removebg-preview.png",
    rating: 3,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },
  {
    id: 11,
    title: "IPhone 17 Pro Max",
    price: 1700,
    image_url: "/iphone_17pro__0s6piftg70ym_large-removebg-preview.png",
    rating: 4,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },
  {
    id: 12,
    title: "Headphone",
    price: 70,
    image_url: "/H655BTPROBlack4-removebg-preview.png",
    rating: 5,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },
  {
    id: 13,
    title: "Cable",
    price: 50,
    image_url: "/20250701175457-removebg-preview.png",
    rating: 5,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },
  {
    id: 15,
    title: "Honor 400 Pro",
    price: 680,
    image_url: "/3797f60300b41b50afb49f7e169b74a2.jpg",
    rating: 5,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },

  {
    id: 18,
    title: "IPhone 17",
    price: 1100,
    image_url: "/b2be274626cf2ff05b07d406687c0334-removebg-preview.png",
    rating: 4,
    display: 6.5,
    battery: 5500,
    camera: 108,
    storage: 256,
    ram: 8,
  },
  {
    id: 20,
    title: "IPhone 17",
    price: 1100,
    image_url: "/b2be274626cf2ff05b07d406687c0334-removebg-preview.png",
    rating: 4,
  },
  {
    id: 21,
    title: "IPhone 17",
    price: 1100,
    image_url: "/b2be274626cf2ff05b07d406687c0334-removebg-preview.png",
    rating: 4,
  },
  {
    id: 23,
    title: "IPhone 17",
    price: 1100,
    image_url: "/b2be274626cf2ff05b07d406687c0334-removebg-preview.png",
    rating: 4,
  },
  {
    id: 24,
    title: "IPhone 17",
    price: 1100,
    image_url: "/b2be274626cf2ff05b07d406687c0334-removebg-preview.png",
    rating: 4,
  },
];

async function ProductSection() {
  const data = await ProductsService.getNewProduct();
  const product = data.slice(0, 12);

  return (
    <>
      <div className="mx-auto text-center pb-50 mt-34 pt-5 ">
        {/* main div  */}

        <div className="cursor-pointer group max-w-md mx-auto">
          {/* title div  */}
          <Title title={"New Arrivals"} />
          <Separator className="max-w-[50px] mx-auto mt-5 cursor-pointer transition-all duration-500 bg-purple-600 group-hover:max-w-[120px]" />
        </div>

        <div id="cards" className="flex flex-wrap  p-4 pl-25 mt-24 gap-7">
          {/* cards div  */}
          <Card product={product} 
          from="new-products"
          />
        </div>

        <Link href={"/newproduct"}>
          <Button variant={"link"} className="mt-14">
            {/* show all button  */}
            <h1>Show All Products</h1>
            <MdNavigateNext />
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ProductSection;
