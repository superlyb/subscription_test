/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const headersConfig = {
  async headers() {
    return [
      {
        // Set the Access-Control-Allow-Origin header to allow requests from site A
        source: "https://www.bus-ai.com",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  ...headersConfig,
};
