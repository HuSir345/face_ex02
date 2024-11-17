/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.coze.cn', 'www.imagehub.cc', 's.coze.cn', 's1.imagehub.cc'],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 