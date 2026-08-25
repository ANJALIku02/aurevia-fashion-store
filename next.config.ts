import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath: '/aurevia-fashion-store',
        assetPrefix: '/aurevia-fashion-store/',
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;

