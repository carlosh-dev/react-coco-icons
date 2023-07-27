// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.esm.js',
		format: 'esm'
	},
    external: [/@babel\/runtime/, 'react'],
	plugins: [
		resolve(),
		babel({ babelHelpers: 'runtime', plugins: [ '@babel/plugin-transform-runtime'] }),
		filesize(),
	]
};