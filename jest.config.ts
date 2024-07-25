import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./src/modules/core/di/inversify.config.ts'],
  clearMocks: true,

  collectCoverage: true,
  // collectCoverageFrom: undefined,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/core/(.*)$': '<rootDir>/src/modules/core/$1',
    '^@/characters/(.*)$': '<rootDir>/src/modules/characters/$1',
  },
}

export default createJestConfig(config)
