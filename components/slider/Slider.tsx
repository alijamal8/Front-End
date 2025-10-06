"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const sliders = [
  {
    id: 1,
    title: "Xiaomi 15T Pro",
    descriotion:"Masterpieces far closer, Leica 5x Pro telephone Spotlight Photography, Leoca Summilux optical lens",
    image_url:"/slider/43ae224614d1cd4bd3d99d187ef0feca.webp",
    postion: "left",
    type: "slider",
    color: "black",
  },
  {
    id: 2,
    title: "Galaxy Watch 8 Classic",
    descriotion:"Built to perform. Designed to impress.,Your every command, right on your wrist,Unlock the secrets to better sleep",
    image_url:"/slider/SCOMB7Q7-376_Watch8-Classic-Lifestyle-PCD-KV-DT-1440x640.webp",
    postion: "right",
    color: "white",
    typr: "slider",
  },

  {
    id: 3,
    title: "HONOR 400 Series",
    descriotion:"Al 200MP Ultra-Clear Al Camera ,Super Zoom Further See Clearer.",
    image_url: "/slider/400-gold-400-pro-grey-pc.avif",
    postion: "left",
    typr: "slider",
    color: "black",
  },

  {
    id: 4,
    title: "HONOR Magic 7 RSR",
    descriotion:"Snapdragon® 8 Elite Mobile Platform ,Unrivaled Performance Unmatched Speed.",
    image_url: "/slider/honor-magic7-rsr-pc.avif",
    postion: "right",
    typr: "slider",
    color: "white",
  },
];

function Slider() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {sliders.map((item, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="p-0">
                  <CardContent className="flex p-0 relative m-0 aspect-square items-center justify-center max-w-[1700px] h-[800px] bg-0 max-sm:max-w-[500px] max-sm:max-h-[500px] xl:max-w-[2200px]">
                    <Link href={""}>
                      <Image
                        src={item.image_url}
                        alt=""
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={100}
                      />
                    </Link>
                    <div
                      className={` absolute ${
                        item.postion === "left"
                          ? `${
                              item.color === "black"
                                ? "text-black"
                                : "text-white"
                            } left-30 bottom-80 max-sm:bottom-15 max-sm:left-5 max-lg:right-5 max-lg:bottom-10`
                          : `${
                              item.color === "black"
                                ? "text-black"
                                : "text-white"
                            } right-50 bottom-80 max-sm:right-5 max-sm:bottom-20 max-lg:right-5 max-lg:bottom-50`
                      }`}
                    >
                      <h1 className="text-5xl font-semibold max-sm:text-2xl">
                        {item.title}
                      </h1>

                      <p className="text-sm  py-4 ">
                        {item.descriotion.split(",").map((line, index) => (
                          <span
                            key={index}
                            className="block text-2xl font-semibold max-sm:text-sm"
                          >
                            {line}
                          </span>
                        ))}
                      </p>

                      <Button
                        size={"lg"}
                        variant={"secondary"}
                        className="mt-4 px-8 cursor-pointer max-sm:px-4"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-5 max-sm:hidden" />
        <CarouselNext className="right-5 max-sm:hidden" />
      </Carousel>
    </div>
  );
}

export default Slider;
