import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
