/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Ini akan men-skip error ESLint saat build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
