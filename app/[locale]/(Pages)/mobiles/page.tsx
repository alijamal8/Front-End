import { ProductsService } from "@/services/api/product";
import { Product } from "@/types/homePage";
import React from "react";
import { Metadata } from "next";
import PhonesPage from "@/components/phonespage/PhonesPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const localePath = `/${locale}/mobiles`;

  return {
    metadataBase: new URL(SITE_URL),
    title: "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض",
    description:
      "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات. قارن بين الأجهزة واختر الهاتف المناسب لك.",
    alternates: {
      canonical: localePath,
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
      url: localePath,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض",
      description:
        "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات.",
    },
  };
}

async function page({ params }: PageProps) {
  const { locale } = await params;
  const data = await ProductsService.getCategoryProduct("Mobiles");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "اسعار الهواتف في العراق" : "Mobile prices in Iraq",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
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
