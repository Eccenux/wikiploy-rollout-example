module.exports = {
	"env": {
		"node": true,
		"browser": true,
		// async/await is fully handled by the wiki-minifier: https://phabricator.wikimedia.org/T277675,
		// and Grade A has been set to ES2018 since August 9, 2026: https://phabricator.wikimedia.org/T395347
		"es2018": true,
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