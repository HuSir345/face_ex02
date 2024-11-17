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
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./public/**/*']
    }
  }
}

module.exports = nextConfig 