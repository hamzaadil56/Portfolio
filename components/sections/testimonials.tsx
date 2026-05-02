"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
	if (testimonials.length === 0) return null;

	return (
		<SectionShell
			id="testimonials"
			eyebrow="// kind words"
			title="What people say about working with me."
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{testimonials.map((t, i) => (
					<motion.figure
						key={t.id}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-10% 0px" }}
						transition={{
							duration: 0.6,
							delay: i * 0.06,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="rounded-lg border border-border bg-surface p-6 ring-soft flex flex-col gap-4"
					>
						<Quote className="size-5 text-accent" />
						<blockquote className="text-body text-fg leading-relaxed">
							{t.quote}
						</blockquote>
						<figcaption className="mt-auto pt-4 border-t border-border/60">
							<p className="text-caption text-fg">{t.name}</p>
							<p className="text-micro text-fg-muted">
								{t.role} · {t.company}
							</p>
						</figcaption>
					</motion.figure>
				))}
			</div>
		</SectionShell>
	);
}
