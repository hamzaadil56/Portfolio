import Header from "@/components/layout/Header";
import "./globals.css";
import { Lexend, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
	title: "Muhammad Hamza",
	description: "Muhammad Hamza's Portfolio",
};

const lexend = Lexend({
	weight: ["300", "400", "500", "600"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${lexend.className}  bg-black/90`}>
				<main className="min-h-screen justify-between flex flex-col">
					<Header />
					{children}
					<Footer />
					<Navbar />
				</main>
			</body>
		</html>
	);
}
