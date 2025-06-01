import Header from "@/components/layout/Header";
import "./globals.css";
import { Lexend, Poppins, Candal } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import localFont from "next/font/local";
import PageTransition from "@/components/widgets/PageTransition";
import { Providers } from "@/providers";
import TransitionLayout from "@/components/layout/TransitionsLayout";

export const metadata = {
	title: "Muhammad Hamza",
	description: "Muhammad Hamza's Portfolio",
};

const cambonFont = localFont({
	src: [
		{
			path: "../assets/fonts/Cambon-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/Cambon-Light.woff2",
			weight: "300",
			style: "light",
		},
		{
			path: "../assets/fonts/Cambon-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
	],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${cambonFont.className}  bg-black/90`}
				style={{ overflowX: "hidden", position: "relative" }}
			>
				<Providers>
					{/* <Header /> */}
					<TransitionLayout>{children}</TransitionLayout>
					{/* <Footer />
						<Navbar /> */}
				</Providers>
				<Navbar />
			</body>
		</html>
	);
}
