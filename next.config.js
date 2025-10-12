/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // permite cargar imágenes desde Unsplash
  },
};

module.exports = nextConfig;
