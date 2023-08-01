// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/index.tsx',
		format: 'esm'
	},
    external: [/@babel\/runtime/, 'react'],
	plugins: [
		resolve(),
		babel({ babelHelpers: 'runtime', plugins: [ '@babel/plugin-transform-runtime'] }),
		typescript({ tsconfig: "./tsconfig.json" }),
		dts()
	]
};