// components/PageTransitionWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePagesContext } from "@/context/PagesContext";
import AnimatingPagesWrapper from "./AnimatingPagesWrapper";
import Home from "@/pages/Home";
import About from "@/pages/About";

export default function PageTransitionLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [delayedPathname, setDelayedPathname] = useState(pathname);
	const { isPageAnimation, handlePageAnimation, handleActivePage } =
		usePagesContext();
	const pages = [<Home />, <About />];

	console.log(pathname, "pathname");
	console.log(delayedPathname, "delayedPathname");

	useEffect(() => {
		if (pathname !== delayedPathname) {
			handlePageIndex();
			handlePageAnimation(true);
			const timer = setTimeout(() => {
				setDelayedPathname(pathname);
				handlePageAnimation(false);
			}, 5000);
		}
	}, [pathname]);

	const handlePageIndex = () => {
		if (pathname === "/about" && delayedPathname === "/") {
			handleActivePage(1, "about", 0, "home");
		} else if (pathname === "/" && delayedPathname === "/about") {
			handleActivePage(0, "home", 1, "about");
		}
	};

	return (
		<>
			{isPageAnimation ? (
				<div className="text-white ">
					<AnimatingPagesWrapper pages={pages} />
				</div>
			) : (
				children
			)}
		</>

		// <AnimatePresence
		// 	mode="popLayout"
		// 	onExitComplete={() => {
		// 		if (typeof window !== "undefined") {
		// 			window.scrollTo({ top: 0 });
		// 		}
		// 	}}
		// >
		// 	<motion.div
		// 		key={currentKey}
		// 		initial={{ opacity: 0, y: 100 }}
		// 		animate={{ opacity: 1, y: 0, scale: 1 }}
		// 		exit={{ opacity: 0, scale: 0.85 }}
		// 		transition={{ duration: 0.5, easing: "ease-in-out" }}
		// 		style={{
		// 			position: "absolute",
		// 			width: "100%",
		// 			height: "100%",
		// 			top: 0,
		// 			left: 0,
		// 		}}
		// 	>
		// 		{children}
		// 	</motion.div>
		// </AnimatePresence>
	);
}
