module.exports = {
  ...require('@pickle/config/eslint-react.js'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js', '*.config.ts'],
}
