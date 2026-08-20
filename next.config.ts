import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No server logic on this site, so it builds to plain static files.
  output: "export",
};

export default nextConfig;
