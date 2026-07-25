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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";
const NORMALIZED_API_BASE_URL = API_BASE_URL.endsWith("/")
  ? API_BASE_URL.slice(0, -1)
  : API_BASE_URL;

const categoryMap = {
  newproduct: {
    href: "/newproduct",
    en: "New Products",
    ar: "المنتجات الجديدة",
  },
  featuredproducts: {
    href: "/featuredproducts",
    en: "Featured Products",
    ar: "المنتجات المميزة",
  },
  mobiles: { href: "/mobiles", en: "Mobiles", ar: "الموبايلات" },
  tablets: { href: "/tablets", en: "Tablets", ar: "التابلت" },
  wearables: {
    href: "/wearables",
    en: "Wearables",
    ar: "الأجهزة القابلة للارتداء",
  },
  audio: { href: "/audio", en: "Audio", ar: "الصوتيات" },
  accessories: {
    href: "/accessories",
    en: "Accessories",
    ar: "الإكسسوارات",
  },
  gamingproducts: {
    href: "/gamingProducts",
    en: "Gaming Products",
    ar: "منتجات الألعاب",
  },
} as const;

function formatCategoryLabel(category: string) {
  return category
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function ProductImages({
  product,
  category,
}: {
  product: Product;
  category: string;
}) {
  const { selectedImageIndex } = useProductUI();
  const [api, setApi] = useState<CarouselApi | null>(null);

  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const normalizedCategory = category.toLowerCase();
  const categoryData =
    categoryMap[normalizedCategory as keyof typeof categoryMap] ?? null;

  const homeLabel = locale === "ar" ? "الرئيسية" : "Home";
  const productLabel = locale === "ar" ? "المنتج" : "Product";
  const categoryLabel = categoryData
    ? locale === "ar"
      ? categoryData.ar
      : categoryData.en
    : formatCategoryLabel(category);
  const categoryHref = categoryData?.href ?? `/${category}`;

  useEffect(() => {
    if (api) api.scrollTo(selectedImageIndex);
  }, [selectedImageIndex, api]);

  return (
    <>
      <div className="max-sm:p-4">
        <Road
          items={[
            { label: homeLabel, href: "/" },
            { label: categoryLabel, href: categoryHref },
            { label: productLabel },
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
                        src={item.image_url}
                        alt={product.name}
                        fill
                        unoptimized
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
