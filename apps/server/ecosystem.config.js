module.exports = {
    apps: [
        {
            name: 'compile',
            script: 'pnpm',
            args: 'exec swc src -d dist --config-file .swcrc -w',
        },
        {
            name: 'server',
            script: './dist/app.js',
            watch: true,
        },
    ],
}
