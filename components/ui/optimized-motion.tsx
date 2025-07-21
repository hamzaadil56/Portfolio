"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface OptimizedMotionProps extends MotionProps {
	children: ReactNode;
	className?: string;
}

// Optimized motion div with performance improvements
export function OptimizedMotionDiv({
	children,
	className,
	...props
}: OptimizedMotionProps) {
	return (
		<motion.div
			className={className}
			style={{
				willChange: "transform, opacity",
				backfaceVisibility: "hidden",
				WebkitBackfaceVisibility: "hidden",
			}}
			{...props}
		>
			{children}
		</motion.div>
	);
}

// Optimized background animation component
export function OptimizedBackgroundAnimation() {
	return (
		<div className="absolute inset-0 pointer-events-none overflow-hidden">
			<motion.div
				className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-2xl"
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: "linear",
					repeatDelay: 0,
				}}
				style={{
					willChange: "transform",
					backfaceVisibility: "hidden",
					WebkitBackfaceVisibility: "hidden",
				}}
			/>
		</div>
	);
}

// Optimized fade in animation
export const optimizedFadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: {
		duration: 0.6,
		ease: "easeOut",
		type: "tween",
	},
};

// Optimized stagger container
export const optimizedStaggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
};

// Optimized viewport settings
export const optimizedViewport = {
	once: true,
	margin: "-50px",
	amount: 0.3,
};
