const reactConfig = require('@pickle/config/eslint-react.js')
module.exports = {
  ...reactConfig,
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
  rules: { ...reactConfig.rules, 'comma-dangle': [0, 'only-multiline'] },
}
