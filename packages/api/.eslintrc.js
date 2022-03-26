const { join } = require('path')

console.log('eslint', __dirname, join(__dirname, '../../'))

module.exports = {
  ...require('@pickle/config/eslint-node.js'),
  env: {
    browser: false,
    node: true,
    es6: true,
    commonjs: true,
  },
  plugins: [],

  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      0, // this rule make error lint in vscode extension
      {
        packageDir: ['./', '../../'],
      },
    ],
    'import/newline-after-import': ['off'],
  },
  ignorePatterns: [
    '.eslintrc.js',
    '*.svg',
    '*.css',
    'jest.config.js, ./scripts/**/.js',
  ],
}
