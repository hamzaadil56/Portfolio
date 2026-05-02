"use client";

import { useRef } from "react";
import {
	motion,
	useMotionValue,
	useSpring,
	useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	className?: string;
	variant?: "primary" | "ghost";
	"aria-label"?: string;
};

export function MagneticButton({
	children,
	href,
	onClick,
	className,
	variant = "primary",
	...rest
}: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const reduce = useReducedMotion();

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
	const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

	const onMove = (e: React.MouseEvent) => {
		if (reduce || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		x.set((e.clientX - cx) * 0.18);
		y.set((e.clientY - cy) * 0.22);
	};

	const onLeave = () => {
		x.set(0);
		y.set(0);
	};

	const Inner = (
		<motion.span
			style={{ x: sx, y: sy }}
			className={cn(
				"relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md",
				"font-medium text-caption tracking-tight transition-colors duration-micro",
				variant === "primary" &&
					"bg-gradient-accent text-canvas hover:opacity-95",
				variant === "ghost" &&
					"border border-border text-fg hover:border-border-bright bg-surface/40",
				className,
			)}
		>
			{children}
		</motion.span>
	);

	const Wrapper = (
		<div
			ref={ref}
			onMouseMove={onMove}
			onMouseLeave={onLeave}
			className="inline-block"
		>
			{Inner}
		</div>
	);

	if (href) {
		return (
			<a href={href} onClick={onClick} {...rest}>
				{Wrapper}
			</a>
		);
	}

	return (
		<button onClick={onClick} {...rest}>
			{Wrapper}
		</button>
	);
}
