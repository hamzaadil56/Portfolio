"use client";

import { useEffect, useRef } from "react";
import {
	motion,
	useMotionValue,
	useSpring,
	useTransform,
	useReducedMotion,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/primitives/magnetic-button";
import { AnimatedText } from "@/components/primitives/animated-text";

const stats = [
	{ value: "500K+", label: "Users impacted" },
	{ value: "3+", label: "Years shipping" },
	{ value: "YC W22", label: "Current company" },
];

export function Hero() {
	const reduce = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);

	const mx = useMotionValue(0.5);
	const my = useMotionValue(0.3);
	const sx = useSpring(mx, { stiffness: 60, damping: 18 });
	const sy = useSpring(my, { stiffness: 60, damping: 18 });
	const left = useTransform(sx, (v) => `calc(${v * 100}% - 30vw)`);
	const top = useTransform(sy, (v) => `calc(${v * 100}% - 30vw)`);

	useEffect(() => {
		if (reduce || !ref.current) return;
		const el = ref.current;
		const handler = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			mx.set((e.clientX - rect.left) / rect.width);
			my.set((e.clientY - rect.top) / rect.height);
		};
		el.addEventListener("mousemove", handler);
		return () => el.removeEventListener("mousemove", handler);
	}, [mx, my, reduce]);

	return (
		<section
			ref={ref}
			id="hero"
			className="relative isolate h-dvh overflow-hidden"
		>
			<div className="absolute inset-0 -z-10 bg-grid mask-radial opacity-50" />

			<motion.div
				aria-hidden
				className="pointer-events-none absolute -z-10 size-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-3xl"
				style={{
					background:
						"radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, hsl(var(--accent-2) / 0.06) 35%, transparent 70%)",
					left,
					top,
				}}
			/>

			<div className="container relative flex flex-col justify-center h-full pt-16">
				<motion.p
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: reduce ? 0.01 : 0.6,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="font-mono text-micro uppercase tracking-[0.3em] text-fg-subtle"
				>
					<span className="text-accent">//</span>{" "}
					{profile.role.toLowerCase()} ·{" "}
					{profile.location.toLowerCase()} ·
					<span className="text-success ml-1">●</span>{" "}
					{profile.availability.toLowerCase()}
				</motion.p>

				<h1
					data-hero-headline
					className="mt-6 font-display font-semibold text-display-2xl tracking-tight"
				>
					<AnimatedText
						as="span"
						text="Muhammad"
						className="block text-fg leading-[1]"
						splitBy="char"
						delay={0.15}
						stagger={0.035}
					/>
					<motion.span
						className="block text-gradient leading-[1]"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: reduce ? 0.01 : 0.8,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.45,
						}}
					>
						Hamza.
					</motion.span>
				</h1>

				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: reduce ? 0.01 : 0.8,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.45,
					}}
					className="mt-6 text-body-lg md:text-h3 text-fg-muted max-w-2xl leading-snug"
				>
					I architect{" "}
					<span className="text-fg font-medium">full-stack systems</span>{" "}
					powered by{" "}
					<span className="text-fg font-medium">Generative AI</span>{" "}
					— from React frontends to backend APIs to LLM pipelines —
					and ship the whole thing end to end.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: reduce ? 0.01 : 0.7,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.6,
					}}
					className="mt-8 flex items-center gap-3 flex-wrap"
				>
					<MagneticButton
						className="basis-[calc(50%-6px)] justify-center md:basis-auto"
						href="#contact"
						variant="primary"
					>
						Hire me
						<ArrowUpRight className="size-4" />
					</MagneticButton>
					<MagneticButton
						className="basis-[calc(50%-6px)] justify-center md:basis-auto"
						href="#work"
						variant="ghost"
					>
						View my work
						<ArrowDown className="size-4" />
					</MagneticButton>
				</motion.div>

				<motion.dl
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: reduce ? 0.01 : 0.6,
						delay: 0.85,
					}}
					className="mt-10 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl"
				>
					{stats.map((s) => (
						<div
							key={s.label}
							className="border-l border-border pl-4 md:pl-6"
						>
							<dt className="font-mono text-micro uppercase tracking-[0.18em] text-fg-subtle">
								{s.label}
							</dt>
							<dd className="mt-1 font-display font-semibold text-h2 md:text-display-lg text-fg tnum">
								{s.value}
							</dd>
						</div>
					))}
				</motion.dl>
			</div>
		</section>
	);
}
