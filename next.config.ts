import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath && rawBasePath !== "/" ? rawBasePath.replace(/\/$/, "") : "";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath,
  outputFileTracingRoot: process.cwd(),
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/icons/**",
      },
    ],
  },
};

export default nextConfig;
