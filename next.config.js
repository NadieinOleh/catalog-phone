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
    MONGO_URL: 'mongodb+srv://olehnadieindev:Pass321@cluster0.x5ql9gk.mongodb.net/catalog?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
