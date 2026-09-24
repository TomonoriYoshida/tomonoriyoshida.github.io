import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only, so build to `out/` as a static export.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
