module.exports = {
	"env": {
		"node": true,
		"browser": true,
		"es2018": true, // async/await is done and Grade A is ES2018 as of Aug 9 2026: https://phabricator.wikimedia.org/T395347
		"mocha": true,
	},
	"globals": {
		"$": true,
		"mw": true,
	},
	"ignorePatterns": [
		"dist/*",
	],
	"extends": "eslint:recommended",
	"overrides": [
		{
			"env": {
				"node": true,
				"browser": true,
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		},
		{
			"env": {
				"node": true,
				"browser": false,
				"es2021": true,
			},
			"files": [
				"*.mjs",
			],
			"parserOptions": {
				"sourceType": "module"
			}
		},
	],
	"rules": {
		"no-prototype-builtins": "off",
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1,
			},
		],
		//"array-bracket-newline": ["error", { "multiline": true, "minItems": 3 }],
		//"array-element-newline": ["error", { "multiline": true }]
		"array-element-newline": ["error", "consistent"]
	}
}