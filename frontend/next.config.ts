import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "randomuser.me"},
      {protocol: "https", hostname: "res.cloudinary.com"},
      {protocol: "https", hostname: "cdn.sortiraparis.com"},
      {protocol: "https", hostname: "api.qrserver.com"}
    ]
  }
};

export default nextConfig;
