/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mona: ["Mona", ...defaultTheme.fontFamily.sans],
				nasa: ["Nasa", ...defaultTheme.fontFamily.sans]
			},
			cursor: {
				nasaPointer: "url(/cursor/pointer.cur), pointer",
				nasaDefault: "url(/cursor/default.cur), default"
			}
		},
	},
	plugins: [],
}
