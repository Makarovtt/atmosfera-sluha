// tailwind.config.js
const { nextui } = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{ts,tsx}",
		"./src/app/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			color: "red",
		},
		screens: {
			"min-screen": "320px",
			"min-360": "360px",
			"min-min-screen": "460px",
			"small-screen": "500px",
			sm: "640px",
			md: "768px",
			"md-lg": "850px",
			lg: "990px",
			"lg-1000": "1180px",
			xl: "1280px",
			"1xl": "1350px",
			"2xl": "1536px",
			"3xl": "2400px",
			"4xl": "2700px",
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#0e7490",
							foreground: "#fff",
						},
					},
				},
			},
		}),
	],
};

export default config;
