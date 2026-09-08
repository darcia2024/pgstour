import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the "lockfile outside repo" inference warning.
  turbopack: { root: __dirname },

  images: {
    // NOTE(pgs): disabled because the current dev environment sits behind a TLS
    // proxy that blocks the image optimizer from fetching remote placeholders.
    // Once real photos live in /public and you deploy somewhere with clean TLS,
    // remove `unoptimized` to get automatic WebP/resizing back.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
