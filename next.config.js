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
      'lh3.googleusercontent.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
