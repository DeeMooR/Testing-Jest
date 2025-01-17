/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true, // сбор информации (плохо с --watchAll)
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js, jsx, ts, tsx}',
    '!<rootDir>/src/**/*.mock.*',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  }
};

module.exports = config;