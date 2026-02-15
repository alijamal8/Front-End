import GamingPage from "@/components/gamingPage/GamingPage";
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
    ? "افضل هاتف للالعاب | أقوى هواتف الألعاب 2026"
    : "Best Gaming Phone | Powerful Gaming Smartphones 2026";

  const description = isAr
    ? "اكتشف افضل هاتف للالعاب مع أفضل أداء وسرعة معالجة. تصفح أقوى هواتف الألعاب في الفئة المتوسطة وبسعر مناسب لعام 2026."
    : "Discover the best gaming phones with high performance, powerful processors, and smooth displays. Explore top gaming smartphones for 2026.";

  const path = `/${locale}/gamingProducts`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/gamingProducts",
        en: "/en/gamingProducts",
        "x-default": "/ar/gamingProducts",
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
  const data = await ProductsService.getNewProduct("gaming");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "أفضل هواتف للألعاب" : "Best Gaming Phones",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        // ✅ رابط المنتج مع locale حتى ما يصير تضارب
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "gamingProducts").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <GamingPage initialProducts={data} />
    </>
  );
}
