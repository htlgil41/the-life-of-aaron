/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					black: '#0a0a0a',
					darkBlue: '#1a202c',
					blue: '#3b82f6',
					white: '#f8fafc',
				}
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'], 
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}