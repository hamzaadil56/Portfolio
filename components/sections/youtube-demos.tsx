"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/sections/section-shell";
import { YoutubeEmbed } from "@/components/primitives/youtube-embed";
import { TechBadge } from "@/components/primitives/tech-badge";
import { youtubeDemos } from "@/data/youtube";
import { RevealGroup, revealItem } from "@/components/primitives/reveal";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function YoutubeDemos() {
	if (youtubeDemos.length === 0) return null;

	const youtube = profile.socials.find((s) => s.label === "YouTube");

	return (
		<SectionShell
			id="demos"
			eyebrow="// demos"
			title={
				<>
					Walkthroughs & <span className="text-gradient">teardowns</span>
					.
				</>
			}
			intro="Recording the build, the demo, and the why."
		>
			<RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
				{youtubeDemos.map((d) => (
					<motion.div
						key={d.id}
						variants={revealItem}
						className="space-y-4"
					>
						<YoutubeEmbed youtubeId={d.youtubeId} title={d.title} />
						<div className="space-y-3">
							<h3 className="font-display font-semibold text-h3 text-fg leading-tight">
								{d.title}
							</h3>
							<p className="text-caption text-fg-muted leading-relaxed">
								{d.description}
							</p>
							<div className="flex flex-wrap gap-1.5">
								{d.tags.map((t) => (
									<TechBadge key={t}>{t}</TechBadge>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</RevealGroup>

			{youtube && (
				<div className="mt-12 flex justify-center">
					<a
						href={youtube.href}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-caption text-fg-muted hover:text-fg transition-colors duration-micro"
					>
						More on YouTube
						<ArrowUpRight className="size-4" />
					</a>
				</div>
			)}
		</SectionShell>
	);
}
