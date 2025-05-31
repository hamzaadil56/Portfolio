import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Lexend, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";

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
			<body className={`${lexend.className}  bg-main-gray`}>
				<main className="min-h-screen justify-between flex flex-col">
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
