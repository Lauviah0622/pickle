import esbuild from 'esbuild'
import { spawn } from 'child_process'

let cp

function spawnChildProcess() {
  cp?.kill()
  cp = spawn('node', [`${process.cwd()}/dist/app.js`])
  cp.stderr.on('data', data => {
    console.log(`stderr: ${data}`)
  })
  cp.stdout.on('data', data => {
    console.log(`stdout: ${data}`)
  })
}

esbuild
  .build({
    entryPoints: ['./src/app.ts'],
    outdir: 'dist',
    bundle: false,
    watch: {
      onRebuild(err) {
        if (err) {
          console.error('watch build failed:', err)
        } else {
          spawnChildProcess()
        }
      },
    },
  })
  .then(() => {
    console.log('start server...')
    spawnChildProcess()
  })
