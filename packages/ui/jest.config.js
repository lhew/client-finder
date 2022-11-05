module.exports = {
  ...require("config/jest.common.web"),
  collectCoverageFrom: [
    "**/components/**/*.{js,jsx,ts,tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
  ],
};
