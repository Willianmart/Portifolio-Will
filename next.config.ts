import type { NextConfig } from "next";

/**
 * Dual deploy:
 * - Vercel (default): App Router at site root
 * - GitHub Pages: GITHUB_PAGES=true → static export + basePath /Portifolio-Will
 */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/Portifolio-Will" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: `${basePath}/`,
        trailingSlash: true,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
