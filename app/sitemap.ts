import type { MetadataRoute } from "next";
import type { Product } from "@/types/homePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const API_URL = "http://localhost:8000/api";

const locales = ["ar", "en"] as const;
const routes = [
  "",
  "/mobiles",
  "/tablets",
  "/wearables",
  "/audio",
  "/accessories",
  "/newproduct",
  "/featuredproducts",
  "/gamingProducts",
] as const;

type ProductWithMeta = Product & {
  updated_at?: string;
  created_at?: string;
};

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

async function getAllProducts(): Promise<ProductWithMeta[]> {
  const endpoints = [
    `${API_URL}/products?category=Mobiles`,
    `${API_URL}/products?category=Tablets`,
    `${API_URL}/products?category=Watches`,
    `${API_URL}/products?category=Audio`,
    `${API_URL}/products?category=Accessories`,
    `${API_URL}/products?type=new`,
    `${API_URL}/products?type=gaming`,
    `${API_URL}/products?category=featured`,
  ];

  const responses = await Promise.allSettled(
    endpoints.map((endpoint) =>
      fetch(endpoint, { next: { revalidate: 300 } }).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${endpoint}`);
        }
        return res.json() as Promise<ProductWithMeta[]>;
      }),
    ),
  );

  const allProducts = responses.flatMap((response) =>
    response.status === "fulfilled" ? response.value : [],
  );

  const uniqueProducts = new Map<number, ProductWithMeta>();
  for (const product of allProducts) {
    if (product?.id) {
      uniqueProducts.set(product.id, product);
    }
  }

  return [...uniqueProducts.values()];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = routes.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${route}`]),
    );
    const changeFrequency: "daily" | "weekly" =
      route === "" ? "daily" : "weekly";

    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency,
      priority: route === "" ? 1 : 0.8,
      alternates: { languages },
    }));
  });

  try {
    const products = await getAllProducts();

    const productRoutes: MetadataRoute.Sitemap = products.flatMap((product) => {
      const categorySlug = toSlug(product.category?.name ?? "products");
      const languages = Object.fromEntries(
        locales.map((locale) => [
          locale,
          `${SITE_URL}/${locale}/product/${categorySlug}/${product.id}`,
        ]),
      );

      const lastModified =
        product.updated_at || product.created_at
          ? new Date(product.updated_at ?? product.created_at ?? now)
          : now;

      return locales.map((locale) => ({
        url: `${SITE_URL}/${locale}/product/${categorySlug}/${product.id}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
        alternates: { languages },
      }));
    });

    return [...staticRoutes, ...productRoutes];
  } catch {
    return staticRoutes;
  }
}
