
import NewProductPage from "@/components/NewProductPage/NewProductPage";
import { ProductsService } from "@/services/api/product";
import { Product } from "@/types/homePage";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageProps = {
  params: Promise<{ locale: "ar" | "en" }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "منتجات جديدة في السوق | أحدث الأجهزة 2026"
    : "New Products in Market | Latest Devices 2026";

  const description = isAr
    ? "تصفح منتجات جديدة في السوق واكتشف أحدث الأجهزة الإلكترونية التي وصلت حديثًا إلى المتجر، من الموبايلات والساعات والسماعات والإكسسوارات لعام 2026."
    : "Browse new products in the market and discover the latest electronic devices recently added to the store including phones, watches, audio, and accessories in 2026.";

  const path = `/${locale}/newproduct`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/newproduct",
        en: "/en/newproduct",
        "x-default": "/ar/newproduct",
      },
    },

    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: isAr ? "ar_IQ" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  
  const data = await ProductsService.getNewProduct("new");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "منتجات جديدة في السوق" : "New Products",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "newproduct").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <NewProductPage initialProducts={data} />
    </>
  );
}
