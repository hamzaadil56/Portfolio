"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/primitives/reveal";
import { profile } from "@/data/profile";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Contact() {
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
		{ scope: sectionRef }
	);

	return (
		<div ref={sectionRef} className="relative overflow-hidden">
			<div
				ref={bgRef}
				aria-hidden
				className="absolute inset-0 -z-10 bg-surface/40 dark:bg-surface/20"
			/>
			<SectionShell
				id="contact"
				eyebrow="// contact"
				title={
					<>
						Let&apos;s build something{" "}
						<span className="text-gradient">
							users actually want
						</span>
						.
					</>
				}
				intro="Briefs, contracts, founding-team chats — all welcome. I read every email."
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
					<Reveal>
						<div className="space-y-4">
							<a
								href={`mailto:${profile.email}`}
								className="group flex items-center justify-between gap-4 py-4 border-b border-border hover:border-accent transition-colors duration-std"
							>
								<div className="flex items-center gap-3">
									<Mail className="size-4 text-fg-subtle group-hover:text-accent transition-colors" />
									<span className="text-fg-muted group-hover:text-fg transition-colors">
										{profile.email}
									</span>
								</div>
								<ArrowUpRight className="size-4 text-fg-subtle group-hover:text-accent transition-colors" />
							</a>
							<a
								href={`mailto:${profile.emailPortfolio}`}
								className="group flex items-center justify-between gap-4 py-4 border-b border-border hover:border-accent transition-colors duration-std"
							>
								<div className="flex items-center gap-3">
									<Mail className="size-4 text-fg-subtle group-hover:text-accent transition-colors" />
									<span className="text-fg-muted group-hover:text-fg transition-colors">
										{profile.emailPortfolio}
									</span>
								</div>
								<ArrowUpRight className="size-4 text-fg-subtle group-hover:text-accent transition-colors" />
							</a>
							<a
								href={`https://wa.me/${profile.phone.replace(
									/[^0-9]/g,
									""
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-between gap-4 py-4 border-b border-border hover:border-accent transition-colors duration-std"
							>
								<div className="flex items-center gap-3">
									<Phone className="size-4 text-fg-subtle group-hover:text-accent transition-colors" />
									<span className="text-fg-muted group-hover:text-fg transition-colors">
										{profile.phone}
									</span>
								</div>
								<ArrowUpRight className="size-4 text-fg-subtle group-hover:text-accent transition-colors" />
							</a>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="space-y-8">
							<div>
								<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle mb-4">
									Elsewhere
								</p>
								<ul className="space-y-2">
									{profile.socials.map((s) => (
										<li key={s.label}>
											<a
												href={s.href}
												target="_blank"
												rel="noopener noreferrer"
												className="group flex items-center justify-between gap-4 text-fg-muted hover:text-fg transition-colors duration-micro"
											>
												<span>{s.label}</span>
												<span className="font-mono text-micro text-fg-subtle group-hover:text-accent">
													{s.handle}
												</span>
											</a>
										</li>
									))}
								</ul>
							</div>

							<div className="rounded-lg border border-border bg-surface p-5 ring-soft">
								<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
									Response time
								</p>
								<p className="mt-2 text-caption text-fg-muted">
									Usually within 24 hours — Karachi time. I
									read everything before I reply, so the reply
									is the answer, not a triage email.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</SectionShell>
		</div>
	);
}
