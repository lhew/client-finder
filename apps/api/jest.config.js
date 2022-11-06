// Since this is a node environment, we only add what is necessary from common config
const { transform, testPathIgnorePatterns } = require("config/jest.common.web");

module.exports = {
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  transform,
  testPathIgnorePatterns,
};
