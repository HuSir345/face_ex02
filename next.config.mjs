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
  swcMinify: false,
  experimental: {
    forceSwcTransforms: true
  }
}

export default nextConfig; 