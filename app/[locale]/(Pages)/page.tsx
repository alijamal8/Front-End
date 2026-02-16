import type { Metadata } from "next";
import Slider from "@/components/slider/Slider";
import Category from "@/components/category/Category";
import ProductSection from "@/components/NewProductsSection/NewProducts";
import FeaturedSection from "@/components/featuredSection/FeaturedSection";
import GamingSection from "@/components/gamingSection/GamingSection";

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
    ? "متجر إلكترونيات في العراق | أحدث الموبايلات والأجهزة التقنية"
    : "Electronics Store in Iraq | Latest Phones & Tech Devices";

  const description = isAr
    ? "تسوق أحدث الموبايلات والساعات والسماعات والإكسسوارات من متجر إلكترونيات في العراق مع تحديث مستمر للمنتجات والعروض."
    : "Shop the latest phones, wearables, audio products and accessories from an electronics store in Iraq with continuously updated products and deals.";

  const path = `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        ar: "/ar",
        en: "/en",
        "x-default": "/ar",
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

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <>
      {/* ✅ SEO Text (Visible to search engines, hidden visually) */}
      <header className="sr-only">
        <h1>
          {isAr ? "متجر إلكترونيات في العراق" : "Electronics Store in Iraq"}
        </h1>
        <p>
          {isAr
            ? "مرحبًا بك في متجرنا الإلكتروني حيث يمكنك تصفح أحدث الموبايلات والساعات والسماعات والإكسسوارات التقنية التي يتم تحديثها باستمرار لمواكبة أحدث التقنيات في السوق."
            : "Welcome to our online store where you can browse the latest phones, wearables, audio products, and accessories updated regularly to match the newest technology trends."}
        </p>
      </header>

      <Slider />
      <Category />
      <ProductSection />
      <FeaturedSection />
      <GamingSection />
    </>
  );
}
