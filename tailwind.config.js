/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bgpurp: '#38182F',
				cream: '#EEE1B3',
				sblue: '#558ABB'
			},

			animation: {
				fade: 'fadeUp 1s ease-in-out'
			},
			keyframes: {
				fadeUp: {
					from: { opacity: 0, transform: 'translateY(10vh)' },
					to: { opacity: 1, transform: 'translateY(0)' }
				}
			}
		}
	},
	plugins: []
};
