/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/LivroLista',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
