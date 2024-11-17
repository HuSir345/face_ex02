/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.coze.cn'
      },
      {
        protocol: 'https',
        hostname: '**.imagehub.cc'
      }
    ]
  },
  experimental: {
    serverActions: true
  }
}

export default nextConfig; 