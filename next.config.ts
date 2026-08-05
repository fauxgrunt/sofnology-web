import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Avoids SegmentViewNode devtools manifest errors on Windows dev server.
    devtoolSegmentExplorer: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
