import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Card from "@/components/global/Card";
import { ProductsService } from "@/services/api/product";
import type { Product } from "@/types/homePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type Locale = "ar" | "en";

type PageProps = {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

function getQueryValue(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const query = getQueryValue(resolvedSearchParams.q).trim();
  const t = await getTranslations({ locale, namespace: "searchPage" });
  const path = `/${locale}/search${query ? `?q=${encodeURIComponent(query)}` : ""}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: query ? t("metadataTitleWithQuery", { query }) : t("metadataTitle"),
    description: query
      ? t("metadataDescriptionWithQuery", { query })
      : t("metadataDescription"),
    alternates: {
      canonical: path,
      languages: {
        ar: `/ar/search${query ? `?q=${encodeURIComponent(query)}` : ""}`,
        en: `/en/search${query ? `?q=${encodeURIComponent(query)}` : ""}`,
        "x-default": `/ar/search${query ? `?q=${encodeURIComponent(query)}` : ""}`,
      },
    },
  };
}

export default async function SearchPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const query = getQueryValue(resolvedSearchParams.q).trim();
  const t = await getTranslations({ locale, namespace: "searchPage" });

  if (!query) {
    return (
      <section className="px-10 py-12 max-sm:px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white max-sm:text-2xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            {t("emptyPrompt")}
          </p>
        </div>
      </section>
    );
  }

  try {
    const products = (await ProductsService.searchProducts(query)) as Product[];

    return (
      <section className="px-10 py-12 max-sm:px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white max-sm:text-2xl">
            {t("resultsFor", { query })}
          </h1>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {t("resultsCount", { count: products.length })}
          </p>

          {products.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 px-6 py-12 text-center text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
              {t("noResults")}
            </div>
          ) : (
            <div className="mt-10 flex flex-wrap justify-center gap-12">
              <Card product={products} from="search" />
            </div>
          )}
        </div>
      </section>
    );
  } catch {
    return (
      <section className="px-10 py-12 max-sm:px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white max-sm:text-2xl">
            {t("title")}
          </h1>
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 px-6 py-12 text-center text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
            {t("fetchError")}
          </div>
        </div>
      </section>
    );
  }
}
