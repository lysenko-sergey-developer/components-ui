module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
    '^.+\\.tsx?$': 'ts-jest',
  },
   testPathIgnorePatterns: [
    '/node_modules/',
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setupEnzyme.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};