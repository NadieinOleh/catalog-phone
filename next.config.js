/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material{{member}}',
    },
  },
  env: {
    MONGO_URL: 'mongodb+srv://olehnadieindev:<Pass321@cluster0.x5ql9gk.mongodb.net/',

  },
  images: {
    remotePatterns: [
      {
        hostname: 'www.impulse-store.com.ua',
      },
    ],
  },
};

module.exports = nextConfig;

    // mongodb+srv://olehnadieindev:<Pass321@cluster0.x5ql9gk.mongodb.net/