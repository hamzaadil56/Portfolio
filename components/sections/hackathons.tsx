"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Award } from "lucide-react";
import { SectionShell } from "@/components/sections/section-shell";
import { TechBadge } from "@/components/primitives/tech-badge";
import { hackathons } from "@/data/hackathons";
import { RevealGroup, revealItem } from "@/components/primitives/reveal";

export function Hackathons() {
	return (
		<SectionShell
			id="hackathons"
			eyebrow="// hackathons"
			title={
				<>
					Built under <span className="text-gradient">pressure</span>.
				</>
			}
			intro="48-hour shipping. Where the most reckless ideas turn into the cleanest demos."
		>
			<RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{hackathons.map((h) => (
					<motion.article
						key={h.id}
						variants={revealItem}
						className="group relative flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 hover:border-border-bright transition-colors duration-std ring-soft"
					>
						<div className="flex items-start justify-between gap-3">
							<div>
								<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
									{h.date}
								</p>
								<h3 className="mt-2 font-display font-semibold text-h3 text-fg leading-tight">
									{h.event}
								</h3>
								<p className="mt-1 text-caption text-fg-muted">
									{h.organizer}
								</p>
							</div>
							{(h.placement || h.award) && (
								<span className="grid place-items-center size-10 rounded-md bg-accent/10 border border-accent/30 text-accent shrink-0">
									{h.placement ? (
										<Trophy className="size-4" />
									) : (
										<Award className="size-4" />
									)}
								</span>
							)}
						</div>

						{(h.placement || h.award) && (
							<div className="flex flex-wrap gap-2">
								{h.placement && (
									<TechBadge tone="accent">
										{h.placement}
									</TechBadge>
								)}
								{h.award && <TechBadge>{h.award}</TechBadge>}
							</div>
						)}

						<div className="flex-1">
							<p className="font-display font-medium text-body-lg text-fg">
								{h.project}
							</p>
							<p className="mt-2 text-caption text-fg-muted leading-relaxed">
								{h.pitch}
							</p>
						</div>

						<div className="flex flex-wrap gap-1.5">
							{h.tech.map((t) => (
								<TechBadge key={t}>{t}</TechBadge>
							))}
						</div>

						{h.links.length > 0 && (
							<div className="flex flex-wrap gap-3 pt-3 border-t border-border/60">
								{h.links.map((l) => (
									<a
										key={l.href}
										href={l.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 text-caption text-fg-muted hover:text-accent transition-colors duration-micro"
									>
										{l.label}
										<ExternalLink className="size-3.5" />
									</a>
								))}
							</div>
						)}
					</motion.article>
				))}
			</RevealGroup>
		</SectionShell>
	);
}
