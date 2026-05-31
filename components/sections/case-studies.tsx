"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/primitives/reveal";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { caseStudies, type CaseStudy } from "@/data/case-studies";

export function CaseStudies() {
	const [active, setActive] = useState<CaseStudy | null>(null);

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
					<Reveal key={c.id} delay={i * 0.05}>
						<article className="h-full flex flex-col rounded-lg border border-border bg-surface p-6 ring-soft hover:border-border-bright transition-colors duration-std">
							<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
								{String(i + 1).padStart(2, "0")} · case study
							</p>
							<h3 className="mt-3 font-display font-semibold text-h3 text-fg leading-tight">
								{c.title}
							</h3>
							<p className="mt-3 text-caption text-fg-muted leading-relaxed line-clamp-2">
								{c.description}
							</p>
							<button
								type="button"
								onClick={() => setActive(c)}
								className="mt-4 self-start inline-flex items-center gap-1 text-caption text-fg underline underline-offset-4 decoration-border hover:text-accent hover:decoration-accent transition-colors duration-micro"
								aria-label={`Read more about ${c.title}`}
							>
								More
								<ArrowUpRight className="size-3.5" />
							</button>
						</article>
					</Reveal>
				))}
			</div>

			<Dialog
				open={active !== null}
				onOpenChange={(open) => !open && setActive(null)}
			>
				<DialogContent className="max-w-2xl bg-surface border-border ring-soft text-fg">
					{active && (
						<>
							<DialogHeader>
								<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
									// case study
								</p>
								<DialogTitle className="mt-2 font-display font-semibold text-h2 text-fg leading-tight">
									{active.title}
								</DialogTitle>
							</DialogHeader>
							<DialogDescription asChild>
								<p className="mt-2 text-body text-fg-muted leading-relaxed">
									{active.description}
								</p>
							</DialogDescription>
						</>
					)}
				</DialogContent>
			</Dialog>
		</SectionShell>
	);
}
