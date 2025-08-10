import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  // 👇 important
  transpilePackages: ["sanity", "@sanity/vision", "@sanity/ui", "framer-motion"],
};

export default nextConfig;
