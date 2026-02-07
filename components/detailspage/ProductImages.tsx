"use client";
import React, { useEffect, useState } from "react";
import { Road } from "../global/Road";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Product } from "@/types/homePage";
import { useProductUI } from "@/stores/colorStore";

function ProductImages({ product }: { product: Product }) {
  const { selectedImageIndex } = useProductUI();
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (api) api.scrollTo(selectedImageIndex);
  }, [selectedImageIndex, api]);

  return (
    <>
      <div className="max-sm:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "Product", href: `/products/${product.id}` },
          ]}
        />
      </div>
      <div>
        <Carousel className="max-w-2xl mt-5" setApi={setApi}>
          <CarouselContent>
            {product.images.map((item, index) => (
              <CarouselItem key={`${selectedImageIndex}-${index}`}>
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-square items-center justify-center p-6 ">
                      <Image
                        src={`http://localhost:8000/storage/${item.image_url}`}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-contain"
                        quality={100}
                      />
                      {/* item.image_url */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 max-sm:hidden" />
          <CarouselNext className="right-3 max-sm:hidden" />
        </Carousel>
      </div>
    </>
  );
}

export default ProductImages;
