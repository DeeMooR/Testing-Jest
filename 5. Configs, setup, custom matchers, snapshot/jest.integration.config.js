/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true, // сбор информации (плохо с --watchAll)
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js, jsx, ts, tsx}',
    '!<rootDir>/src/**/*.mock.*',
  ],
  testMatch: ['<rootDir>/src/**/*.spec.js']
};

module.exports = config;