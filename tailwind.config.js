/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bgpurp: '#38182F',
				cream: '#EEE1B3'
			},
			animation: {
				fade: 'fadeIn 1s ease-in-out'
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			}
		}
	},
	plugins: []
};
