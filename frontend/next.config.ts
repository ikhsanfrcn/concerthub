import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "randomuser.me"},
      {protocol: "https", hostname: "res.cloudinary.com"},
      {protocol: "https", hostname: "cdn.sortiraparis.com"}
    ]
  }
};

export default nextConfig;
