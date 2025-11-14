/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.klipfolio.com",
        port: "", // optional
        pathname: "/**", // allow all image paths from this domain
      },
    ],
  },
};

module.exports = nextConfig;
