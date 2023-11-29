/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
