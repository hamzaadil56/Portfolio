"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
	if (testimonials.length === 0) return null;

	const loop = [...testimonials, ...testimonials];

	return (
		<SectionShell
			id="testimonials"
			eyebrow="// kind words"
			title="What people say about working with me."
		>
			<div
				className="relative overflow-hidden group"
				style={{
					maskImage:
						"linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
				}}
			>
				<div className="flex gap-6 w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
					{loop.map((t, i) => (
						<figure
							key={`${t.id}-${i}`}
							className="w-[320px] md:w-[380px] shrink-0 rounded-lg border border-border bg-surface p-6 ring-soft flex flex-col gap-4"
						>
							<Quote className="size-5 text-accent" />
							<blockquote className="text-caption md:text-body text-fg-muted leading-relaxed">
								&ldquo;{t.quote}&rdquo;
							</blockquote>
							<figcaption className="mt-auto pt-4 border-t border-border/60 flex items-center gap-3">
								<Image
									src={t.avatar}
									alt={t.name}
									width={40}
									height={40}
									className="rounded-full size-10 object-cover"
									unoptimized
								/>
								<div>
									<p className="text-caption text-fg">{t.name}</p>
									<p className="text-micro text-fg-subtle">
										{t.role} · {t.company}
									</p>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</SectionShell>
	);
}
