import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "thumbnail*.coupangcdn.com" },
      { hostname: "image*.coupangcdn.com" },
    ],
  },
};

export default nextConfig;
