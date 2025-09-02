/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['bcrypt']
  },
  images: {
    domains: ['picsum.photos']
  }
}

module.exports = nextConfig
