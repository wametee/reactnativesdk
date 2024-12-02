/**
 * Jest Configuration for React Native SDK
 * For detailed documentation, visit: https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Collect coverage information for specific source files
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts", // Only collect coverage for SDK source files
    "!src/**/*.d.ts", // Exclude type definitions
    "!src/**/__tests__/**", // Exclude test files from coverage
  ],

  // Output coverage files to the "coverage" directory
  coverageDirectory: "coverage",

  // Define the coverage threshold for better code quality enforcement
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Coverage reporting formats
  coverageReporters: ["json", "lcov", "text", "clover"],

  // Set the test environment (Node.js is typically used for SDKs)
  testEnvironment: "node",

  // The paths to modules that configure the testing environment before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Specify the root directory for Jest
  rootDir: "./",

  // Search for test files in specific directories
  roots: ["<rootDir>/src"],

  // Match test files using these glob patterns
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],

  // Ignore test files in specific directories
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],

  // Mock static file imports like images or CSS files
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Transform TypeScript files using ts-jest
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Ignore transformations for node_modules except for React Native dependencies
  transformIgnorePatterns: [
    "/node_modules/(?!react-native|@react-native|react-native-vector-icons|axios).+",
  ],

  // Enable verbose test reporting
  verbose: true,

  // Watchman file watching (default for Jest)
  watchman: true,
};

export default config;
