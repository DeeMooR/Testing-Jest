/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true, // сбор информации (плохо с --watchAll)
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js, jsx, ts, tsx}',
    '!<rootDir>/src/**/*.mock.*',
  ],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/internal/jest/jest.setup.js'],
  setupFilesAfterEnv: [
    '<rootDir>/internal/jest/setup-tests.js',
    '<rootDir>/internal/jest/custom-matchers.js'
  ],
  // глобальные переменные можно прописывать как тут, так и в setupFiles
  globals: {
    __DEV__: true,
  }
};

module.exports = config;