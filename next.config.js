/** @type {import('next').NextConfig} */
const nextConfig = {
  // matching all API routes
  source: 'public/fonts/kremlin.ttf',
  headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
};

module.exports = nextConfig;
