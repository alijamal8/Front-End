import PhonesPage from "@/components/phonespage/PhonesPage";
import { ProductsService } from "@/services/api/product";
import { Product } from "@/types/homePage";
import React from "react";
import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض",
  description:
    "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات. قارن بين الأجهزة واختر الهاتف المناسب لك.",
  alternates: {
    canonical: "/mobiles",
    languages: {
      ar: "/ar/mobiles",
      en: "/en/mobiles",
      "x-default": "/ar/mobiles",
    },
  },
  openGraph: {
    title: "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض",
    description:
      "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات.",
    url: "/mobiles",
    type: "website",
    locale: "ar",
  },
  twitter: {
    card: "summary_large_image",
    title: "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض",
    description:
      "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات.",
  },
};


async function page() {
  const data = await ProductsService.getCategoryProduct("Mobiles");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "اسعار الهواتف في العراق",
    itemListElement: data.slice(0, 10).map((product: Product, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${SITE_URL}/product/${(product.category?.name ?? "mobiles").toLowerCase()}/${product.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <div>
        <PhonesPage initialProducts={data} />
      </div>
    </>
  );
}

export default page;
