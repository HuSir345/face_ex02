/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.coze.cn', 'www.imagehub.cc', 's.coze.cn', 's1.imagehub.cc'],
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/.git/**', '**/node_modules/**']
    }
    return config
  }
}

module.exports = nextConfig 