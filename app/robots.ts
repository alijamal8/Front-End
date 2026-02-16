import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === "production";
  const sitemap = `${SITE_URL}/sitemap.xml`;

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap,
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
