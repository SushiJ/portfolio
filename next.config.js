module.exports = {
  async headers() {
    return [
      {
        source: '/public/fonts/kremlin.ttf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
