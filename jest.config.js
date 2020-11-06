module.exports = {
	moduleFileExtensions: [
		'js',
		'mjs',
		'json',
	],
	moduleNameMapper: {
		'^@root/(.*)$': '<rootDir>/source/scripts/$1',
	},
	transform: {
		'^.+\\.m?js$': 'babel-jest',
	},
	verbose: true,
};
