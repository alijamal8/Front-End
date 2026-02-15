import WearablesPage from "@/components/wearablesPage/WearablesPage";
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
    ? "ساعات ذكية رخيصة | أفضل ساعات سمارت 2026"
    : "Cheap Smartwatches | Best Smart Watches 2026";

  const description = isAr
    ? "اكتشف ساعات ذكية رخيصة مع أفضل المواصفات لعام 2026. تصفح اسعار ساعات سمارت واختر أفضل ساعة ذكية رخيصة تناسبك أو ساعة ذكية للأطفال بأسعار مناسبة."
    : "Discover cheap smartwatches with great features in 2026. Browse smart watch prices and choose the best budget smartwatch for you or for kids.";

  const path = `/${locale}/wearables`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/wearables",
        en: "/en/wearables",
        "x-default": "/ar/wearables",
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

  // ✅ عدّل الاسم إذا فئتك بالداتابيس اسمها "Watches" بدل "Wearables"
  const data = await ProductsService.getCategoryProduct("Watches");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "ساعات ذكية رخيصة" : "Cheap Smartwatches",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "wearables").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <WearablesPage initialProducts={data} />
    </>
  );
}
