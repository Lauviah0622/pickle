const { join } = require('path')

console.log('server lint ', [__dirname, join(__dirname, '../../')])

module.exports = {
    ...require('@pickle/config/eslint-node.js'),
    parserOptions: {
        root: true,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/no-extraneous-dependencies': [
            0, // this rule make error lint in vscode extension
            {
                packageDir: [__dirname, join(__dirname, '../../')],
            },
        ],
        'no-restricted-exports': 'off',
    },
    ignorePatterns: [
        '.eslintrc.js',
        '*.svg',
        '*.css',
        'jest.config.js, ./scripts/**/.js',
    ],
}
