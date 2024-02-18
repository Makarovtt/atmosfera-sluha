// tailwind.config.js
const { nextui } = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			color: "red",
		},
		screens: {
			"min-screen": "320px",

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "990px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};

export default config;
