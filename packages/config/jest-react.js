module.exports = {
  ...require('./jest-base'),
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['**/src/**/*.{js,t,jsx,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.ts?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
    '^.+\\.js?$': 'esbuild-jest',
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null,
}
