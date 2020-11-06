const atImport = require('postcss-import');
const extend = require('postcss-extend');
const hexRgba = require('postcss-hexrgba');
const csso = require('postcss-csso');
const presetEnv = require('postcss-preset-env');

module.exports = {
	map: {
		inline: false,
	},
	plugins: [
		atImport(),
		presetEnv({
			stage: 2,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
			},
		}),
		extend(),
		hexRgba(),
		csso({
			sourceMap: true,
		}),
	],
};
