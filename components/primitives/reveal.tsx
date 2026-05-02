"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	delay?: number;
	y?: number;
	className?: string;
	once?: boolean;
};

export function Reveal({
	children,
	delay = 0,
	y = 24,
	className,
	once = true,
}: Props) {
	const reduce = useReducedMotion();
	const variants: Variants = {
		hidden: { opacity: 0, y: reduce ? 0 : y },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: reduce ? 0.01 : 0.6,
				ease: [0.22, 1, 0.36, 1],
				delay: reduce ? 0 : delay,
			},
		},
	};
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			whileInView="show"
			viewport={{ once, margin: "-10% 0px -10% 0px" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

type GroupProps = {
	children: ReactNode;
	stagger?: number;
	className?: string;
};

export function RevealGroup({
	children,
	stagger = 0.06,
	className,
}: GroupProps) {
	const reduce = useReducedMotion();
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: reduce ? 0 : stagger,
						delayChildren: 0.05,
					},
				},
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export const revealItem: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	},
};
