import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Avoids SegmentViewNode devtools manifest errors on Windows dev server.
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
