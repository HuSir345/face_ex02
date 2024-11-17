/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.coze.cn'
      },
      {
        protocol: 'https',
        hostname: '*.imagehub.cc'
      }
    ]
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'sharp']
    return config
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components']
  }
}

module.exports = nextConfig 