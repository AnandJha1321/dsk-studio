/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add support for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Add other formats if necessary
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },

};

export default nextConfig;
