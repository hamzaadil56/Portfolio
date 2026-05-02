"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionShell } from "@/components/sections/section-shell";
import { TechBadge } from "@/components/primitives/tech-badge";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/primitives/reveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Skills() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const bgRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (
				!bgRef.current ||
				window.matchMedia("(prefers-reduced-motion: reduce)").matches
			)
				return;
			gsap.to(bgRef.current, {
				yPercent: -20,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});
		},
		{ scope: sectionRef },
	);

	return (
		<div ref={sectionRef} className="relative overflow-hidden">
			<div
				ref={bgRef}
				aria-hidden
				className="absolute inset-0 -z-10 bg-surface/40 dark:bg-surface/20"
			/>
			<SectionShell
				id="skills"
				eyebrow="// stack"
				title={
					<>
						What I reach for when{" "}
						<span className="text-gradient">it has to ship</span>.
					</>
				}
				intro="A working stack — productive today, not a wishlist."
			>
				<div className="divide-y divide-border/60">
					{skillGroups.map((g, i) => (
						<Reveal key={g.id} delay={i * 0.06}>
							<div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-7">
								<div className="flex items-baseline md:flex-col md:items-start gap-3 md:gap-1">
									<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
										{String(i + 1).padStart(2, "0")}
									</p>
									<h3 className="font-display font-semibold text-h3 text-fg">
										{g.label}
									</h3>
								</div>
								<div className="flex flex-wrap gap-2 items-start content-start">
									{g.items.map((item) => (
										<TechBadge key={item}>{item}</TechBadge>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</SectionShell>
		</div>
	);
}
