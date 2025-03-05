/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
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
	// Disables Tailwind's reset etc
	corePlugins: {
		preflight: false
	},
	plugins: []
};
