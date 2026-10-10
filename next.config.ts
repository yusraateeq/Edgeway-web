import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imagekit-loader.ts",
  },
};

export default nextConfig;
