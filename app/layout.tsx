import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const ppMori = localFont({
	src: [
		{
			path: "../assets/fonts/ppmori/PPMori-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/ppmori/PPMori-SemiBold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../assets/fonts/ppmori/PPMori-Extralight.otf",
			weight: "200",
			style: "normal",
		},
	],
	variable: "--font-display",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://hamzaadil.dev"),
	title: {
		default: "Muhammad Hamza — Software Engineer",
		template: "%s · Muhammad Hamza",
	},
	description:
		"Software Engineer shipping production single-page apps and full-stack systems used by 500,000+ users. React, Next.js, TypeScript, ASP.NET Core, FastAPI.",
	keywords: [
		"Muhammad Hamza",
		"Software Engineer",
		"Full Stack Engineer",
		"Frontend Engineer",
		"React",
		"Next.js",
		"TypeScript",
		"ASP.NET Core",
		"FastAPI",
		"Karachi",
		"Pakistan",
	],
	authors: [{ name: "Muhammad Hamza", url: "https://hamzaadil.dev" }],
	creator: "Muhammad Hamza",
	openGraph: {
		title: "Muhammad Hamza — Software Engineer",
		description:
			"I ship production single-page apps and full-stack systems used by 500,000+ users.",
		url: "https://hamzaadil.dev",
		siteName: "Muhammad Hamza",
		type: "website",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Muhammad Hamza — Software Engineer",
		description:
			"I ship production single-page apps and full-stack systems used by 500,000+ users.",
		images: ["/og-image.png"],
		creator: "@hamza_chemE_dev",
	},
	robots: { index: true, follow: true },
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#0E0E12" },
		{ media: "(prefers-color-scheme: light)", color: "#FCFCFC" },
	],
	viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${ppMori.variable} ${inter.variable} ${mono.variable}`}
			suppressHydrationWarning
		>
			<body className="font-sans antialiased">
				{/* ANALYTICS_HERE */}
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
					<Toaster position="bottom-right" />
				</ThemeProvider>
			</body>
		</html>
	);
}
