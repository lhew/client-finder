/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")(["ui"]);
const withImages = require("next-images");

module.exports = withPlugins([[withTM], [withImages]], {
  reactStrictMode: true,
  images: {
    domains: ["avataaars.io"],
    // formats: ["image/avif", "image/svg+xml"],
  },
});
