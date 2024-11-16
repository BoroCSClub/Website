const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // MDX options here (optional)
  },
});

module.exports = withMDX({
  // Append the default Next.js extensions with .mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      "tse3.mm.bing.net",
      "images.unsplash.com",
      "tse1.mm.bing.net",
      "tse2.mm.bing.net",
      "tse4.mm.bing.net",
      "assets.aceternity.com",
      "forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com",
      "i0.wp.com",
      "hiddenlogics.com",
      "media.licdn.com",
      "msoft.af",
      "miro.medium.com",
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  entry: './pages/index.js',
});