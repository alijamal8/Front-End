import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
   images: {
    domains: ["localhost"],
    qualities: [25, 50, 60, 75, 100],
      remotePatterns: [
        {
          protocol: 'https',   // أو 'http' إذا المصدر قديم
          hostname: 'images.pexels.com', // غيّرها حسب مصدر الصور
          pathname: '/**',    // يسمح بجميع المسارات
        
        },
      ],
    },/* config options here */
};
const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');
export default withNextIntl(nextConfig);

