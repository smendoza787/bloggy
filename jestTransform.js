const config = {
	babelrc: false,
	presets: [
		"@babel/preset-env",
		"@babel/react"
	],
};

module.exports = require("babel-jest").createTransformer(config);
