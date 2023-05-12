/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['wlbjdywcdbpyogizztkl.supabase.co'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
