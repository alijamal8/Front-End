import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',   // أو 'http' إذا المصدر قديم
          hostname: 'images.pexels.com', // غيّرها حسب مصدر الصور
          pathname: '/**',    // يسمح بجميع المسارات
        },
      ],
    },/* config options here */
};

export default nextConfig;
