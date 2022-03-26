/* eslint-disable import/no-extraneous-dependencies */
import * as esbuild from 'esbuild'
import { spawn } from 'child_process'

interface BuildOptions {
  entryPoints: string[]
  outdir: string
}

interface RunOptions {
  target: string
}

let cp

function spawnChildProcess(runOptions?: Partial<RunOptions>) {
  cp?.kill()
  cp = spawn('node', [`${process.cwd()}/dist/${runOptions.target}`])
  cp.stderr.on('data', data => {
    console.log(`stderr: ${data}`)
  })
  cp.stdout.on('data', data => {
    console.log(`stdout: ${data}`)
  })
}

export default function runDev(
  buildOptions?: Partial<BuildOptions>,
  runOptions?: Partial<RunOptions>
) {
  esbuild
    .build({
      entryPoints: ['./src/app.ts'],
      outdir: 'dist',
      bundle: false,
      platform: 'node',
      watch: {
        onRebuild(err) {
          if (err) {
            console.error('watch build failed:', err)
          } else {
            spawnChildProcess(runOptions)
          }
        },
      },
      ...buildOptions,
    })
    .then(() => {
      console.log('start server...')
      spawnChildProcess(runOptions)
    })
}
