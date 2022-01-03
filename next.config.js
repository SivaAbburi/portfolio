const { withContentlayer } = require("next-contentlayer");
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withContentlayer()({
  // Your Next.js config...
  reactStrictMode: true,
  swcMinify: true,
});
