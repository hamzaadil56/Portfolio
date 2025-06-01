"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [displayChildren, setDisplayChildren] = useState(children);
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		// Route changed
		if (children !== displayChildren) {
			setShouldRender(false); // Trigger exit animation

			const timeout = setTimeout(() => {
				setDisplayChildren(children); // Set new page after exit finishes
				setShouldRender(true); // Trigger enter animation
			}, 500); // Duration should match exit animation

			return () => clearTimeout(timeout);
		}
	}, [children, displayChildren]);

	return (
		<AnimatePresence mode="wait">
			{shouldRender && (
				<motion.div
					key={pathname}
					initial={{ y: 100, opacity: 0, scale: 0.95 }}
					animate={{ y: 0, opacity: 1, scale: 1 }}
					exit={{ y: -50, opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
					}}
				>
					{displayChildren}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
