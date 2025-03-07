/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			primary: '#fff',
			secondary: '#000',
			light: '#fff',
			dark: '#000'
		},
		backgroundColor: ({ theme }) => theme('colors')
	},
	corePlugins: {
		preflight: false
	},
	plugins: []
};
