/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "./",
  distDir: "dist",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
