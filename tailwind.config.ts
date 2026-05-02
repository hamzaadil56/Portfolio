import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.25rem",
				md: "2rem",
				lg: "3rem",
			},
			screens: {
				"2xl": "1280px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", "system-ui", "sans-serif"],
				display: ["var(--font-display)", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
			},
			fontSize: {
				micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
				caption: ["0.875rem", { lineHeight: "1.5" }],
				body: ["1rem", { lineHeight: "1.6" }],
				"body-lg": ["1.125rem", { lineHeight: "1.6" }],
				h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
				h2: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
				"display-lg": [
					"clamp(2.5rem, 5vw, 3rem)",
					{ lineHeight: "1.05", letterSpacing: "-0.025em" },
				],
				"display-xl": [
					"clamp(3rem, 7vw, 4rem)",
					{ lineHeight: "1.02", letterSpacing: "-0.03em" },
				],
				"display-2xl": [
					"clamp(3.5rem, 11vw, 5.75rem)",
					{ lineHeight: "1", letterSpacing: "-0.035em" },
				],
			},
			spacing: {
				"section-y-mobile": "96px",
				"section-y": "192px",
			},
			borderRadius: {
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
				xl: "var(--radius-xl)",
			},
			colors: {
				canvas: {
					DEFAULT: "hsl(var(--bg))",
					elevated: "hsl(var(--bg-elevated))",
				},
				surface: {
					DEFAULT: "hsl(var(--surface))",
					2: "hsl(var(--surface-2))",
				},
				fg: {
					DEFAULT: "hsl(var(--fg))",
					muted: "hsl(var(--fg-muted))",
					subtle: "hsl(var(--fg-subtle))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					2: "hsl(var(--accent-2))",
					foreground: "hsl(var(--accent-foreground))",
				},
				success: "hsl(var(--success))",
				warning: "hsl(var(--warning))",
				danger: "hsl(var(--danger))",
				info: "hsl(var(--info))",

				/* shadcn semantic aliases */
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				border: "hsl(var(--border))",
				"border-bright": "hsl(var(--border-bright))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			transitionTimingFunction: {
				"out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
				"in-out-quart": "cubic-bezier(0.65, 0, 0.35, 1)",
			},
			transitionDuration: {
				micro: "150ms",
				std: "320ms",
				cinematic: "720ms",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-up": {
					from: { opacity: "0", transform: "translateY(16px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
				shimmer: "shimmer 2.5s linear infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-accent":
					"linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-2)) 100%)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
