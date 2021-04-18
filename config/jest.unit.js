const baseConfig = require('./jest.base.json')

module.exports = {
  ...baseConfig,
  rootDir: '../src',
  collectCoverage: true,
  coverageDirectory: '../coverage',
}
