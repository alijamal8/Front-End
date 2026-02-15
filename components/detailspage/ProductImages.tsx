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
import { useLocale } from "next-intl";


function ProductImages({ product }: { product: Product }) {
  const { selectedImageIndex } = useProductUI();
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  
  useEffect(() => {
    if (api) api.scrollTo(selectedImageIndex);
  }, [selectedImageIndex, api]);

  return (
    <>
      <div className="max-sm:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "Product", href: `/prodcut/${product.id}` },
          ]}
        />
      </div>
      <div>
        <Carousel opts={{ direction: dir }} className="max-w-2xl mt-5" setApi={setApi}>
          <CarouselContent>
            {product.images.map((item, index) => (
              <CarouselItem key={`${selectedImageIndex}-${index}`}>
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-square items-center justify-center p-6 ">
                      <Image
                        src={`http://localhost:8000/storage/${item.image_url}`}
                        alt={product.name}
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
         {dir === "rtl" ? (
               <>
                 <CarouselNext className="absolute left-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10 rotate-180 right-auto" />
                 <CarouselPrevious className="absolute right-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10 rotate-180 left-auto" />
               </>
             ) : (
               <>
                 <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10" />
                 <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10" />
               </>
             )}
        </Carousel>
      </div>
    </>
  );
}

export default ProductImages;
