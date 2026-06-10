import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: every route is prerendered, so the site deploys as
  // plain static assets (Cloudflare Workers static assets, see wrangler.jsonc).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
