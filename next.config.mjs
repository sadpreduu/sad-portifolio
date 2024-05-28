/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
output: "export",
images: {
  loader: "akamai",
  path: "",
},
assetPrefix: "./",
distDir: "dist",
images: { unoptimized: true } ,

};

export default nextConfig;
