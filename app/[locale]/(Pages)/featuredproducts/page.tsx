import FeaturedPage from "@/components/featuredproducts/FeaturedPage";
import { ProductsService } from "@/services/api/product";
import { Product } from "@/types/homePage";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageProps = {
  params: Promise<{ locale: "ar" | "en" }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "الأكثر مبيعاً | منتجات مميزة مختارة 2026"
    : "Best Sellers | Featured Products 2026";

  const description = isAr
    ? "تصفح المنتجات الأكثر مبيعاً في المتجر واكتشف منتجات مميزة ومقترحة من أفضل الأجهزة والإكسسوارات التقنية لعام 2026."
    : "Browse best-selling products and discover featured devices and accessories recommended for purchase in 2026.";

  const path = `/${locale}/featuredproducts`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/featuredproducts",
        en: "/en/featuredproducts",
        "x-default": "/ar/featuredproducts",
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

  const data = await ProductsService.getNewProduct("featured");
  console.log(data);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "الأكثر مبيعاً" : "Best Sellers",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "products").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <FeaturedPage initialProducts={data} />
    </>
  );
}
