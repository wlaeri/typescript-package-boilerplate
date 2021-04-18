const baseConfig = require('./jest.base')

module.exports = {
  ...baseConfig,
  rootDir: '../src',
  collectCoverage: true,
  coverageDirectory: '../coverage',
}
