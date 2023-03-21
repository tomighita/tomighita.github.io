/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#F28C18",	 
					"secondary": "#22d3ee",
					"accent": "#a21caf",
					"neutral": "#1B1D1D",
					"base-100": "#212121",
					"info": "#818cf8",
					"success": "#84cc16",
					"warning": "#facc15",
					"error": "#DC2626",
				}
			}
		],
	},
}
