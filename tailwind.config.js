module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	purge: [
		"./src/**/*.{js,ts,jsx,tsx}",
		// Add more here
	],
	theme: {
		screens: {
			xs: "375px",
			// => @media (min-width: 375px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [
		//require("@tailwindcss/forms"), require("@tailwindcss/typography")
	],
};
