module.exports = {
  verbose: false,
  roots: ['<rootDir>/test'],
  moduleFileExtensions: ['js', 'vue'],
  moduleDirectories: ['node_modules'],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '\\.(less)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '.*\\.(vue|js)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!vue-router)'],
  snapshotSerializers: ['jest-serializer-html']
};
