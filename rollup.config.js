import path from 'path';

import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const INPUT_DIR = 'source/scripts';
const OUTPUT_DIR = 'build/js';

const isProduction = process.env.NODE_ENV === 'production';

export default {
	input: `${INPUT_DIR}/index.mjs`,

	output: {
		dir: OUTPUT_DIR,
		entryFileNames: '[name].mjs',
		chunkFileNames: '[name]-[hash].mjs',
		format: 'esm',
		sourcemap: true,
	},

	plugins: [
		alias({
			entries: {
				'@root': path.resolve(__dirname, INPUT_DIR),
			},
		}),
		nodeResolve({
			browser: true,
		}),
		commonjs(),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		}),
		...isProduction ? [terser()] : [],
	],
};
