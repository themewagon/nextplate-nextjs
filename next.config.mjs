import config from "./src/config/config.json" with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: "/nextplate-nextjs",
  trailingSlash: true,
};

export default nextConfig;
