import AudioPage from "@/components/audioPage/AudioPage";
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
    ? "سماعات بلوتوث رخيصة | أفضل سماعات رأس 2026"
    : "Cheap Bluetooth Earbuds | Best Headphones 2026";

  const description = isAr
    ? "اكتشف سماعات بلوتوث رخيصة مع أفضل المواصفات لعام 2026. تصفح أفضل سماعات رأس رخيصة وسماعات جيمنج بأسعار مناسبة من أشهر العلامات التجارية."
    : "Discover cheap Bluetooth earbuds with great features in 2026. Browse budget headphones and gaming headsets at the best prices.";

  const path = `/${locale}/audio`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/audio",
        en: "/en/audio",
        "x-default": "/ar/audio",
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

  // ✅ عدّل الاسم إذا فئة الصوتيات عندك بالداتابيس اسمها غير "Audio"
  const data = await ProductsService.getCategoryProduct("Audio");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ar" ? "سماعات بلوتوث رخيصة" : "Cheap Bluetooth Earbuds",
    itemListElement: data
      .slice(0, 10)
      .map((product: Product, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "audio").toLowerCase()}/${product.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <AudioPage initialProducts={data} />
    </>
  );
}
