"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Props = {
	text: string;
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	splitBy?: "char" | "word";
	delay?: number;
	stagger?: number;
};

/**
 * Free SplitText alternative — splits text into spans and reveals
 * char-by-char or word-by-word with GSAP. Respects prefers-reduced-motion.
 */
export function AnimatedText({
	text,
	as = "span",
	className,
	splitBy = "char",
	delay = 0,
	stagger = 0.025,
}: Props) {
	const ref = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!ref.current) return;
			const reduce = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;
			const targets = ref.current.querySelectorAll("[data-split]");
			if (reduce) {
				gsap.set(targets, { opacity: 1, y: 0 });
				return;
			}
			gsap.fromTo(
				targets,
				{ opacity: 0, y: "0.45em" },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "expo.out",
					stagger,
					delay,
				},
			);
		},
		{ scope: ref },
	);

	const parts =
		splitBy === "word" ? text.split(" ") : Array.from(text);

	const Tag = as as any;

	return (
		<Tag
			ref={ref as any}
			className={cn("inline-block", className)}
			aria-label={text}
		>
			{parts.map((p, i) => (
				<span
					key={i}
					data-split
					aria-hidden
					className="inline-block will-change-transform"
					style={{ opacity: 0 }}
				>
					{p === " " ? " " : p}
					{splitBy === "word" && i < parts.length - 1 && " "}
				</span>
			))}
		</Tag>
	);
}
