import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
  },
  logging: {
    incomingRequests: false,
  },
};

export default nextConfig;
