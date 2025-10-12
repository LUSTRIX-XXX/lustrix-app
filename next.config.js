/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "lustrix.tech",
      "app.lustrix.tech"
    ],
  },
  async redirects() {
    return [
      {
        source: "/perfil",
        destination: "/pages/perfil",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
