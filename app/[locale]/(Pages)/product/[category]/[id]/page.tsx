import ProductDetails from "@/components/detailspage/ProductDetails";
import ProductImages from "@/components/detailspage/ProductImages";
import ProductSpecifications from "@/components/detailspage/ProductSpecifications";
import { ProductsService } from "@/services/api/product";
import type { Metadata } from "next";
import React from "react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageProps = {
  params: { locale: "ar" | "en"; category: string; id: string };
};

function toAbsoluteUrl(url?: string) {
  if (!url) return `${SITE_URL}/logo.png`;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${SITE_URL}${url}`;
  return `${SITE_URL}/${url}`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, category, id } = params;
  const isAr = locale === "ar";

  const product = await ProductsService.getSingleProduct(id);

  if (!product) {
    const path = `/${locale}/product/${category}/${id}`;
    return {
      metadataBase: new URL(SITE_URL),
      title: isAr ? "المنتج غير موجود" : "Product Not Found",
      alternates: {
        canonical: path,
      },
      robots: { index: false, follow: false },
    };
  }

  const path = `/${locale}/product/${category}/${id}`;
  const image = toAbsoluteUrl(product.images?.[0]?.image_url);

  const title = isAr
    ? `${product.name} | السعر والمواصفات`
    : `${product.name} | Price & Specifications`;

  const description = isAr
    ? (product.description?.slice(0, 155) ||
        `تعرف على ${product.name} مع السعر والمواصفات والصور.`)
    : (product.description?.slice(0, 155) ||
        `Discover ${product.name} with price, specs, and images.`);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        ar: `/ar/product/${category}/${id}`,
        en: `/en/product/${category}/${id}`,
        "x-default": `/ar/product/${category}/${id}`,
      },
    },

    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: isAr ? "ar_IQ" : "en_US",
      images: [{ url: image, width: 800, height: 800 }],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, category, id } = params;

  const product = await ProductsService.getSingleProduct(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">
          {locale === "ar" ? "المنتج غير موجود" : "Product not found"}
        </h1>
      </div>
    );
  }

  const productUrl = `${SITE_URL}/${locale}/product/${category}/${id}`;
  const image = toAbsoluteUrl(product.images?.[0]?.image_url);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [image],
    url: productUrl,
    brand: product.brand?.name
      ? { "@type": "Brand", name: product.brand.name }
      : undefined,
    offers: {
      "@type": "Offer",
      url: productUrl,
      price: product.price,
      priceCurrency: "USD",
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="mb-30 px-10 grid grid-cols-[40%_60%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
        <div id="left">
          <ProductImages product={product} category={category} />
          <ProductSpecifications product={product} />
        </div>

        <div id="right">
          <ProductDetails product={product} />
        </div>
      </div>
    </>
  );
}
