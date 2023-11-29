/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
