/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			borderColor: {
				dark: '#30363d',
			},
			backgroundColor: {
				dark: 'rgb(13, 17, 23)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
