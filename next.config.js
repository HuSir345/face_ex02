/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.coze.cn', 'www.imagehub.cc', 's.coze.cn', 's1.imagehub.cc'],
  }
}

module.exports = nextConfig 