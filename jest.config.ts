import nextJest from "next/jest";

/** @type {import('jest').Config} */
export default nextJest({
  dir: "./",
})({
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jest-environment-jsdom",
});
