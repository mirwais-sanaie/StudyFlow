/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.klipfolio.com"], // <-- add your external hostname here
  },
};

module.exports = nextConfig;
