module.exports = {
    preset: 'ts-jest', 
    testEnvironment: 'jsdom', 
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
    },
    moduleNameMapper: {
      "\\.(png|jpg|jpeg|svg)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "identity-obj-proxy"  // This handles CSS module imports
    },
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)', // Allow Jest to transform ES modules from 'axios'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], 
    
  };
  