"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { usePagesContext } from "@/context/PagesContext";
import { scale } from "motion";
import { duration } from "drizzle-orm/gel-core";
import { AnimatePresence } from "motion/react";

const AnimatingPagesWrapper = ({ pages }: { pages: React.ReactNode[] }) => {
	const { activePage } = usePagesContext();
	// const [yProps, setYProps] = useState({
	// 	y1: 10,
	// 	y2: 80,
	// 	scale1: 1,
	// 	scale2: 1,
	// });

	// const toggleOrder = () => {
	// 	setYProps((prev) => ({
	// 		...prev,
	// 		y2: prev.y2 === 80 ? -30 : 80,
	// 		scale1: prev.scale1 === 1 ? 0.5 : 1,
	// 	}));
	// };

	console.log(activePage.previousPageIndex, "activePage.previousPageIndex");
	console.log(pages, "pages");

	return (
		<div>
			{pages?.map((page: React.ReactNode, index: number) => {
				return (
					<AnimatePresence mode="popLayout" key={index}>
						{activePage.pageIndex === index ? (
							<motion.div
								key={index}
								initial={{
									translateY: 800,
								}}
								animate={{
									translateY: 0,
								}}
								transition={{
									duration: 0.75,
									type: "easeInOut",
								}}
								className="w-full absolute top-0 left-0 transition-all z-20 rounded-3xl"
							>
								{page}
							</motion.div>
						) : (
							<motion.div
								key={index}
								initial={{
									translateY: 0,
									scale: activePage.activePageScale,
								}}
								animate={{
									translateY: 0,
									scale: activePage.previousPageScale,
								}}
								transition={{
									duration: 1,
								}}
								className="w-full absolute top-0 left-0 transition-all z-10 rounded-3xl"
							>
								{page}
							</motion.div>
						)}
					</AnimatePresence>
				);
			})}
			{/* <div className="w-full max-w-2xl relative">
				<motion.div
					key="div1"
					initial={{ y: 20 }}
					animate={{ y: yProps.y1, scale: yProps.scale1 }}
					transition={{ type: "spring" }}
				>
					Div 1
				</motion.div>

				<motion.div
					key="div2"
					initial={{ y: 80 }}
					animate={{ y: yProps.y2, scale: yProps.scale2 }}
					transition={{ type: "spring" }}
					className="h-32 w-full rounded-lg flex items-center justify-center text-4xl font-bold text-white absolute bg-purple-500 z-10 shadow-2xl"
					style={{ top: "4rem" }}
				>
					Div 2
				</motion.div>
			</div> */}

			{/* <motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={toggleOrder}
				className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
			>
				Reorder Divs
			</motion.button> */}
		</div>
	);
};

export default AnimatingPagesWrapper;
