"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 25,
		mass: 0.4,
	});

	return (
		<motion.div
			aria-hidden
			style={{ scaleX, transformOrigin: "0% 50%" }}
			className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-accent"
		/>
	);
}
