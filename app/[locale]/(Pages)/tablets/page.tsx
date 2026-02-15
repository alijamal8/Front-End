import TabletsPage from "@/components/tabletsPage/TabletsPage";
import { ProductsService } from "@/services/api/product";
import { Product } from "@/types/homePage";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageProps = {
  params: { locale: "ar" | "en" };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = params;
  const isAr = locale === "ar";

  const title = isAr
    ? "افضل تابلت للدراسة | أفضل ايباد للدراسة"
    : "Best Tablet for Study | Top Tablets 2026";

  const description = isAr
    ? "اكتشف افضل تابلت للدراسة مع أفضل المواصفات والأسعار المناسبة لعام 2026. تصفح أجهزة التابلت المناسبة للجامعة والعمل اليومي."
    : "Discover the best tablet for study in 2026. Browse top tablets suitable for university, work, and daily use.";

  const path = `/${locale}/tablets`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/tablets",
        en: "/en/tablets",
        "x-default": "/ar/tablets",
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
  const { locale } = params;

  const data = await ProductsService.getCategoryProduct("Tablets");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "افضل تابلت للدراسة" : "Best Tablets for Study",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "tablets").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <TabletsPage initialProducts={data} />
    </>
  );
}
