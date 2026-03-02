import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/devinstoll",
  assetPrefix: "/devinstoll/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
