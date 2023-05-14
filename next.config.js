/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'wlbjdywcdbpyogizztkl.supabase.co',
      'images.unsplash.com',
      'plus.unsplash.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
