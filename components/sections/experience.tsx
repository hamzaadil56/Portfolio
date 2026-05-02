"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GraduationCap } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/primitives/reveal";
import { experience, education } from "@/data/experience";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ExperienceSection() {
	const trackRef = useRef<HTMLDivElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!trackRef.current || !progressRef.current) return;
			const reduce = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;

			if (reduce) {
				gsap.set(progressRef.current, { scaleY: 1 });
				return;
			}

			const trigger = ScrollTrigger.create({
				trigger: trackRef.current,
				start: "top 75%",
				end: "bottom 70%",
				scrub: 0.6,
				animation: gsap.fromTo(
					progressRef.current,
					{ scaleY: 0 },
					{ scaleY: 1, ease: "none" },
				),
			});

			// Lateral parallax per card — alternating left/right slide-in
			gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card, i) => {
				const dir = i % 2 === 0 ? -1 : 1;
				gsap.fromTo(
					card,
					{ x: dir * 28, opacity: 0.6 },
					{
						x: 0,
						opacity: 1,
						ease: "none",
						scrollTrigger: {
							trigger: card,
							start: "top 88%",
							end: "top 42%",
							scrub: 0.8,
						},
					},
				);
			});

			return () => {
				trigger.kill();
			};
		},
		{ scope: trackRef },
	);

	return (
		<SectionShell
			id="experience"
			eyebrow="// experience"
			title={
				<>
					Companies I&apos;ve <span className="text-gradient">built</span>{" "}
					with.
				</>
			}
			intro="Where I've been shipping. Impact per role, not just titles."
		>
			<div ref={trackRef} className="relative max-w-4xl mx-auto">
				{/* Connector base line */}
				<div
					aria-hidden
					className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2"
				/>
				{/* Scrub-bound progress line */}
				<div
					aria-hidden
					className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px md:-translate-x-1/2"
				>
					<div
						ref={progressRef}
						style={{ transformOrigin: "top" }}
						className="size-full scale-y-0 bg-gradient-to-b from-accent via-accent-2 to-transparent"
					/>
				</div>

				<ol className="relative space-y-16 md:space-y-24">
					{experience.map((role, i) => {
						const flip = i % 2 === 1;
						return (
							<li
								key={role.id}
								className={`exp-card relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}
							>
								<span
									aria-hidden
									className="absolute left-3 md:left-1/2 top-2 size-3 -translate-x-1/2 rounded-full bg-canvas border-2 border-accent shadow-[0_0_14px_-2px_hsl(var(--accent)/0.6)]"
								/>
								<Reveal delay={i * 0.04}>
									<div
										className={`md:px-2 ${flip ? "md:text-left md:pr-8" : "md:text-right md:pl-8"}`}
									>
										<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
											{role.startDate} — {role.endDate}{" "}
											{role.current && (
												<span className="ml-2 text-success">
													● now
												</span>
											)}
										</p>
										<h3 className="mt-3 font-display font-semibold text-h2 text-fg leading-tight">
											{role.role}
										</h3>
										<p className="mt-1 text-body text-fg-muted">
											<span className="text-fg">
												{role.company}
											</span>
											{role.companyTag && (
												<span className="text-fg-subtle">
													{" "}
													· {role.companyTag}
												</span>
											)}
										</p>
										<p className="mt-1 text-caption text-fg-subtle">
											{role.location}
										</p>
									</div>
								</Reveal>

								<Reveal delay={i * 0.04 + 0.05}>
									<div
										className={`mt-4 md:mt-0 md:px-2 ${flip ? "md:pl-8" : "md:pr-8"}`}
									>
										<ul className="space-y-3">
											{role.bullets.map((b, j) => (
												<li
													key={j}
													className="text-caption md:text-body text-fg-muted leading-relaxed"
												>
													<span className="mr-2 text-accent">
														→
													</span>
													{b}
												</li>
											))}
										</ul>
									</div>
								</Reveal>
							</li>
						);
					})}

					{education.map((ed) => (
						<li
							key={ed.id}
							className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
						>
							<span
								aria-hidden
								className="absolute left-3 md:left-1/2 top-2 grid place-items-center size-6 -translate-x-1/2 rounded-full bg-canvas border border-border-bright"
							>
								<GraduationCap className="size-3 text-fg-muted" />
							</span>
							<Reveal>
								<div className="md:px-2 md:text-right md:pr-8">
									<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
										{ed.startDate} — {ed.endDate}
									</p>
									<h3 className="mt-3 font-display font-semibold text-h3 text-fg leading-tight">
										{ed.credential}
									</h3>
									<p className="mt-1 text-caption text-fg-muted">
										{ed.field}
									</p>
								</div>
							</Reveal>
							<Reveal>
								<div className="mt-4 md:mt-0 md:px-2 md:pl-8">
									<p className="text-body text-fg-muted">
										<span className="text-fg">{ed.school}</span>
									</p>
									<p className="mt-1 text-caption text-fg-subtle">
										{ed.location}
									</p>
									{ed.note && (
										<p className="mt-2 font-mono text-micro text-fg-muted">
											{ed.note}
										</p>
									)}
								</div>
							</Reveal>
						</li>
					))}
				</ol>
			</div>
		</SectionShell>
	);
}
