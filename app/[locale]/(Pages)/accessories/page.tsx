import AccessoriesPage from "@/components/accessoriesPage/AccessoriesPage";
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
    ? "اكسسوارات موبايل | شواحن وكيبلات وباور بانك وأقلام 2026"
    : "Mobile Accessories | Chargers, Cables, Power Banks & Pens 2026";

  const description = isAr
    ? "تصفح اكسسوارات موبايل متنوعة تشمل شواحن تايب سي وكيبلات وباور بانك شحن سريع وأقلام تابلت. اختر اكسسوارات الهاتف المناسبة بأفضل الأسعار لعام 2026."
    : "Browse mobile accessories including Type-C chargers, cables, fast-charging power banks, and tablet pens. Choose the right phone accessories with great prices in 2026.";

  const path = `/${locale}/accessories`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/accessories",
        en: "/en/accessories",
        "x-default": "/ar/accessories",
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

  // ✅ عدّل الاسم إذا فئتك بالداتابيس مو "Accessories"
  const data = await ProductsService.getCategoryProduct("Accessories");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "اكسسوارات موبايل" : "Mobile Accessories",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "accessories").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <AccessoriesPage initialProducts={data} />
    </>
  );
}
