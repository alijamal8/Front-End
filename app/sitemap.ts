import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${route}`]),
    );

    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
