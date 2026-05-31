"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/primitives/reveal";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
	return (
		<SectionShell
			id="case-studies"
			eyebrow="// case studies"
			title={
				<>
					Selected <span className="text-gradient">case studies</span>.
				</>
			}
			intro="Deep dives into the systems I've shipped — the constraints, the trade-offs, the outcomes."
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{caseStudies.map((c, i) => (
					<Reveal key={c.slug} delay={i * 0.05}>
						<article className="h-full flex flex-col rounded-lg border border-border bg-surface p-6 ring-soft hover:border-border-bright transition-colors duration-std">
							<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
								{String(i + 1).padStart(2, "0")} · case study
							</p>
							<h3 className="mt-3 font-display font-semibold text-h3 text-fg leading-tight">
								{c.title}
							</h3>
							<p className="mt-3 text-caption text-fg-muted leading-relaxed line-clamp-2">
								{c.cardDescription}
							</p>
							<Link
								href={`/case-studies/${c.slug}`}
								className="mt-4 self-start inline-flex items-center gap-1 text-caption text-fg underline underline-offset-4 decoration-border hover:text-accent hover:decoration-accent transition-colors duration-micro"
								aria-label={`Read the ${c.title} case study`}
							>
								More
								<ArrowUpRight className="size-3.5" />
							</Link>
						</article>
					</Reveal>
				))}
			</div>
		</SectionShell>
	);
}
