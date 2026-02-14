import GamingPage from "@/components/gamingPage/GamingPage";
import { ProductsService } from "@/services/api/product";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: { locale: "ar" | "en" };
}): Promise<Metadata> {
  const isAr = params.locale === "ar";

  const title = isAr
    ? "افضل هاتف للالعاب | أقوى هواتف الألعاب 2025"
    : "Best Gaming Phone | Powerful Gaming Smartphones 2025";

  const description = isAr
    ? "اكتشف افضل هاتف للالعاب مع أفضل أداء وسرعة معالجة. تصفح أقوى هواتف الألعاب في الفئة المتوسطة وبسعر مناسب لعام 2025."
    : "Discover the best gaming phones with high performance, powerful processors, and smooth displays. Explore top gaming smartphones for 2025.";

  const path = `/${params.locale}/gaming-mobile`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: "/ar/gaming-mobile",
        en: "/en/gaming-mobile",
        "x-default": "/ar/gaming-mobile",
      },
    },

    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: isAr ? "ar" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
async function page() {
  const data = await ProductsService.getNewProduct("gaming");
  console.log(data);
  return <GamingPage initialProducts={data} />;
}

export default page;
