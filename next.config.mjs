/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
        port: '',
      },
    ],
  },
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: 'require("reflect-metadata");',
          raw: true,
          entryOnly: true,
        })
      )
    }

    return config
  },
}

export default nextConfig
