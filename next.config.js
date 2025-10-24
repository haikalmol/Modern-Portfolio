/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Ini akan men-skip error ESLint saat build
    ignoreDuringBuilds: true,
  },

  output: 'export',
  images: { unoptimized: true }
};

module.exports = nextConfig;
