/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"main-gray": "#1D1D1D",
				"light-gray": "#DCDCDC",
				"secondary-gray": "#383838",
				"line-gray": "#494747",
			},
		},
	},
	plugins: [],
};
