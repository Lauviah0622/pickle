module.exports = {
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
    'comma-dangle': [0, 'only-multiline'],
    'import/prefer-default-export': [0],
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
    {
      files: ['*.ts'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
      ],

      plugins: ['@typescript-eslint', 'import'],

      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['apps/*/tsconfig.json'],
          },
          node: {
            extensions: ['.js'],
            paths: ['scripts'],
          },
        },
      },
    },
  ],
  ignorePatterns: [
    'node_modules',
    'public',
    'styles',
    'coverage',
    'dist',
    '.turbo',
  ],
}
