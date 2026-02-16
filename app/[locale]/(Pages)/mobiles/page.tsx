import PhonesPage from "@/components/phonespage/PhonesPage";
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
  const localePath = `/${locale}/mobiles`;

  const title = isAr
    ? "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض"
    : "Phone Prices in Iraq | Latest Mobiles & Best Deals";

  const description = isAr
    ? "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات. قارن بين الأجهزة واختر الهاتف المناسب لك."
    : "Browse phone prices in Iraq and discover the latest mobiles with the best deals and specifications. Compare devices and choose the right phone for you.";

  const ogDescription = isAr
    ? "تصفح اسعار الهواتف في العراق واكتشف أحدث الموبايلات مع أفضل العروض والمواصفات."
    : "Browse phone prices in Iraq and discover the latest mobiles with the best deals and specs.";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: localePath,
      languages: {
        ar: "/ar/mobiles",
        en: "/en/mobiles",
        "x-default": "/ar/mobiles",
      },
    },

    openGraph: {
      title,
      description: ogDescription,
      url: localePath,
      type: "website",
      locale: isAr ? "ar" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
    },
  };
}

async function page({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
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
        url: `${SITE_URL}/${locale}/product/${(product.category?.name ?? "mobiles").toLowerCase()}/${product.id}`,
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
