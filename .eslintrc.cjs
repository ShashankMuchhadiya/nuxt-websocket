// ESLint configuration for Nuxt 3
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	extends: ["@nuxt/eslint"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		// Custom rules
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"vue/multi-word-component-names": "off",
		"vue/no-multiple-template-root": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
	},
};
