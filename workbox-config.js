module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,webapp}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};