module.exports = {
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest'
    }
  };