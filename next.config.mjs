/** @type {import('next').NextConfig} */
const nextConfig = {
/*   output: "export",*/  
reactStrictMode: true,
output: "export",
images: {
  loader: "akamai",
  path: "",
},
assetPrefix: "./",

};

export default nextConfig;
