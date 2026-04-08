import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a standalone server bundle so the production Dockerfile can copy
  // only the minimal runtime artifacts (server.js + .next/static + public).
  output: "standalone",
};

export default nextConfig;
