import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

// tsconfig uses classic jsx ("react") so React 16.8+ works; react/jsx-runtime needs 16.14+.
const external = ['react']

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.mjs', format: 'esm' },
      { file: 'dist/index.cjs', format: 'cjs' },
    ],
    external,
    plugins: [typescript({ tsconfig: './tsconfig.json', declaration: false })],
  },
  {
    input: 'src/index.ts',
    // .d.cts so CJS consumers under moduleResolution node16 get CJS-flavored types
    output: [
      { file: 'dist/index.d.ts', format: 'esm' },
      { file: 'dist/index.d.cts', format: 'esm' },
    ],
    external,
    plugins: [dts()],
  },
]
