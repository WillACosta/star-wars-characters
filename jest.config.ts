import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./src/modules/core/test/inversify-setup-jest.ts'],
  clearMocks: true,

  collectCoverage: true,
  verbose: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    '.mock.ts',
    'sw-characters-fake-repository.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/core/(.*)$': '<rootDir>/src/modules/core/$1',
    '^@/characters/(.*)$': '<rootDir>/src/modules/characters/$1',
  },
}

export default createJestConfig(config)
