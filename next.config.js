/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 i18n: {
    locales: ['es', 'pt', 'en'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
