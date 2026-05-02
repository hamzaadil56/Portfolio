"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { SectionShell } from "@/components/sections/section-shell";
import { TechBadge } from "@/components/primitives/tech-badge";
import { featuredProjects } from "@/data/projects";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Projects() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!wrapperRef.current || !trackRef.current) return;

			const mm = gsap.matchMedia();

			mm.add(
				"(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
				() => {
					const wrapper = wrapperRef.current!;
					const track = trackRef.current!;
					const distance = () =>
						track.scrollWidth - wrapper.clientWidth;

					gsap.to(track, {
						x: () => -distance(),
						ease: "none",
						scrollTrigger: {
							trigger: wrapper,
							start: "top top",
							end: () => `+=${distance()}`,
							pin: true,
							anticipatePin: 1,
							scrub: 0.6,
							invalidateOnRefresh: true,
						},
					});
				},
			);

			return () => mm.revert();
		},
		{ scope: wrapperRef },
	);

	return (
		<SectionShell
			id="work"
			eyebrow="// selected work"
			title={
				<>
					Things I&apos;ve <span className="text-gradient">shipped</span>
					.
				</>
			}
			intro="A subset. The full story is on my GitHub — these are the ones with real users behind them."
		>
			<div
				ref={wrapperRef}
				className="relative lg:overflow-hidden -mx-5 md:-mx-8 lg:mx-0"
			>
				<div
					ref={trackRef}
					className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 px-5 md:px-8 lg:px-12 lg:py-6"
				>
					{featuredProjects.map((p, i) => (
						<article
							key={p.id}
							className="group flex flex-col lg:w-[640px] xl:w-[720px] lg:shrink-0 rounded-xl border border-border bg-surface hover:border-border-bright transition-colors duration-std overflow-hidden ring-soft"
						>
							<div className="relative aspect-[16/10] overflow-hidden bg-canvas-elevated">
								<Image
									src={p.image as any}
									alt={`${p.title} — ${p.subtitle}`}
									fill
									className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-cinematic ease-out-expo"
									sizes="(max-width: 1024px) 100vw, 720px"
									placeholder={
										typeof p.image === "object"
											? "blur"
											: "empty"
									}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-canvas/40 via-transparent to-transparent" />
								<div className="absolute top-4 left-4 flex gap-2">
									<TechBadge tone="accent">
										{p.status}
									</TechBadge>
									<TechBadge>{p.year}</TechBadge>
								</div>
							</div>

							<div className="flex-1 p-6 lg:p-8 flex flex-col gap-5">
								<div>
									<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
										{String(i + 1).padStart(2, "0")} ·{" "}
										{p.category}
									</p>
									<h3 className="mt-3 font-display font-semibold text-h2 text-fg leading-tight">
										{p.title}
									</h3>
									<p className="mt-1 text-body text-fg-muted leading-snug">
										{p.subtitle}
									</p>
								</div>

								<p className="text-caption text-fg-muted leading-relaxed">
									{p.description}
								</p>

								<ul className="space-y-2">
									{p.achievements.slice(0, 2).map((a, idx) => (
										<li
											key={idx}
											className="text-caption text-fg-muted leading-relaxed flex gap-2"
										>
											<span className="text-accent shrink-0">
												→
											</span>
											<span>{a}</span>
										</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-1.5">
									{p.technologies.slice(0, 5).map((t) => (
										<TechBadge key={t}>{t}</TechBadge>
									))}
								</div>

								<div className="mt-auto flex flex-wrap items-center gap-3 pt-3 border-t border-border/60">
									<p className="font-mono text-micro text-fg-subtle uppercase tracking-[0.18em]">
										Impact
										<span className="ml-2 text-fg">
											{p.impact}
										</span>
									</p>
									<div className="ml-auto flex items-center gap-2">
										{p.repo && (
											<a
												href={p.repo}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 text-caption text-fg-muted hover:text-fg transition-colors duration-micro"
												aria-label={`${p.title} GitHub repository`}
											>
												<Github className="size-4" />
											</a>
										)}
										{p.link && (
											<a
												href={p.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-caption text-fg hover:text-accent border border-border hover:border-accent transition-colors duration-micro"
											>
												Live
												<ArrowUpRight className="size-3.5" />
											</a>
										)}
									</div>
								</div>
							</div>
						</article>
					))}

					{/* Trailing spacer so last card scrolls into full view on desktop */}
					<div
						aria-hidden
						className="hidden lg:block lg:w-[10vw] lg:shrink-0"
					/>
				</div>
			</div>
		</SectionShell>
	);
}
