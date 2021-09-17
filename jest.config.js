module.exports = {
	moduleNameMapper: {
		'@maxthlon/(.*)$': '<rootDir>/libs/$1'
	},
	transformIgnorePatterns: [
		`node_modules/(?!@ngrx|@ngx-formly|@babylonjs)`
	],
	transform: {
		"^.+\\.js$": "babel-jest"
	}
};
