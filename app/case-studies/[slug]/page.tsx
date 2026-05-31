import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	ArrowLeft,
	ArrowRight,
	ArrowLeftRight,
	Book,
	Check,
	CheckCircle2,
	Music,
	Sparkles,
	UploadCloud,
	Users,
	Video,
} from "lucide-react";
import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { caseStudies, getCaseStudy, type Block } from "@/data/case-studies";

export function generateStaticParams() {
	return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Metadata {
	const c = getCaseStudy(params.slug);
	if (!c) return { title: "Case Study" };
	return {
		title: `${c.title} — Case Study`,
		description: c.subtitle,
	};
}

export default function CaseStudyPage({
	params,
}: {
	params: { slug: string };
}) {
	const study = getCaseStudy(params.slug);
	if (!study) notFound();

	return (
		<>
			<ScrollProgress />
			<Nav />
			<main className="relative pt-14">
				{/* HERO */}
				<header className="mx-auto max-w-3xl px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-14">
					<Link
						href="/#case-studies"
						className="inline-flex items-center gap-1.5 font-mono text-micro uppercase tracking-[0.18em] text-fg-subtle hover:text-fg transition-colors duration-micro mb-8"
					>
						<ArrowLeft className="size-3.5" />
						All case studies
					</Link>
					<div className="flex items-center gap-2.5 mb-6">
						<span className="block size-2 rounded-full bg-accent" />
						<span className="font-mono text-micro uppercase tracking-[0.18em] text-accent">
							{study.eyebrow}
						</span>
					</div>
					<h1 className="font-display font-semibold text-display-lg md:text-display-xl text-fg leading-[1.1] tracking-tight max-w-3xl">
						{study.title}
					</h1>
					<p className="mt-5 text-body-lg text-fg-muted max-w-2xl leading-relaxed">
						{study.subtitle}
					</p>
					<div className="mt-8 flex flex-wrap gap-2">
						{study.metaChips.map((chip) => (
							<span
								key={chip}
								className="font-mono text-micro uppercase tracking-[0.1em] text-fg-muted bg-surface border border-border rounded-full px-3 py-1"
							>
								{chip}
							</span>
						))}
					</div>
				</header>

				{/* STATS */}
				<div className="mx-auto max-w-3xl px-5 md:px-8">
					<div
						className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-t border-b border-border"
						role="list"
					>
						{study.stats.map((s) => (
							<div
								key={s.label}
								role="listitem"
								className="bg-canvas p-5 md:p-6 flex flex-col gap-1.5"
							>
								<span className="font-display text-h2 md:text-display-lg text-accent leading-none tracking-tight tnum">
									{s.num}
								</span>
								<span className="font-mono text-micro uppercase tracking-[0.1em] text-fg-subtle leading-snug">
									{s.label}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* BODY */}
				<div className="mx-auto max-w-3xl px-5 md:px-8">
					{study.sections.map((section, idx) => (
						<section
							key={idx}
							className="py-14 md:py-16 border-b border-border last:border-b-0"
						>
							<div className="flex items-center gap-2.5 mb-7">
								<span className="font-mono text-micro uppercase tracking-[0.18em] text-fg-subtle">
									{section.label}
								</span>
								<span className="flex-1 h-px bg-border" />
							</div>
							<h2 className="font-display font-semibold text-h2 md:text-display-lg text-fg leading-tight tracking-tight mb-5">
								{section.heading}
							</h2>
							<div className="flex flex-col">
								{section.blocks.map((block, bi) => (
									<BlockRenderer key={bi} block={block} />
								))}
							</div>
						</section>
					))}
				</div>

				{/* CTA */}
				<section className="bg-canvas-elevated border-t border-border mt-0">
					<div className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-16 text-center">
						<h3 className="font-display font-semibold text-h2 md:text-display-lg text-fg leading-tight tracking-tight">
							Interested in working together?
						</h3>
						<p className="mt-3 text-body text-fg-muted">
							I build production-grade AI and full-stack systems for
							international clients.
						</p>
						<a
							href="mailto:hamzaadil56@gmail.com"
							className="inline-flex items-center gap-2 mt-7 rounded-full bg-gradient-accent text-canvas font-mono text-micro uppercase tracking-[0.12em] px-6 py-3 hover:opacity-90 transition-opacity duration-micro"
						>
							Get in touch
						</a>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

function BlockRenderer({ block }: { block: Block }) {
	switch (block.kind) {
		case "p":
			return (
				<p
					className="text-body text-fg-muted leading-relaxed mb-4 last:mb-0 [&_strong]:text-fg [&_strong]:font-medium [&_em]:font-display [&_em]:italic"
					dangerouslySetInnerHTML={{ __html: block.html }}
				/>
			);
		case "callout": {
			const tone = block.tone ?? "accent";
			const styles =
				tone === "success"
					? {
							wrap: "border-l-success bg-success/10",
							text: "text-success",
					  }
					: tone === "amber"
					? {
							wrap: "border-l-warning bg-warning/10",
							text: "text-warning",
					  }
					: {
							wrap: "border-l-accent bg-accent/10",
							text: "text-accent",
					  };
			return (
				<div
					className={`my-7 rounded-r-lg border-l-2 px-6 py-5 ${styles.wrap}`}
				>
					<p
						className={`text-caption md:text-body leading-relaxed [&_strong]:font-medium ${styles.text}`}
						dangerouslySetInnerHTML={{ __html: block.html }}
					/>
				</div>
			);
		}
		case "quote":
			return (
				<blockquote className="my-8 border-l-2 border-border pl-6 py-2">
					<p className="font-display italic text-body-lg md:text-h3 text-fg leading-snug">
						&ldquo;{block.text}&rdquo;
					</p>
				</blockquote>
			);
		case "flow":
			return (
				<div className="my-8 flex flex-col">
					{block.steps.map((step, i) => {
						const last = i === block.steps.length - 1;
						return (
							<div key={i} className="flex gap-5 items-stretch">
								<div className="flex flex-col items-center w-9 shrink-0">
									<div className="grid place-items-center size-9 rounded-full bg-gradient-accent text-canvas font-mono text-caption font-medium">
										{i + 1}
									</div>
									{!last && (
										<div className="w-px flex-1 bg-border my-1" />
									)}
								</div>
								<div
									className={`flex-1 pt-1 ${
										last ? "pb-0" : "pb-7"
									}`}
								>
									<p className="font-display text-body md:text-body-lg font-medium text-fg leading-snug mb-1.5">
										{step.title}
									</p>
									<p
										className="text-caption text-fg-muted leading-relaxed [&_strong]:text-fg [&_strong]:font-medium"
										dangerouslySetInnerHTML={{
											__html: step.desc,
										}}
									/>
								</div>
							</div>
						);
					})}
				</div>
			);
		case "techGrid":
			return (
				<div className="my-7 grid grid-cols-2 md:grid-cols-3 gap-3">
					{block.items.map((t, i) => (
						<div
							key={i}
							className="rounded-md border border-border bg-surface px-4 py-3 flex flex-col gap-1"
						>
							<span className="font-mono text-micro uppercase tracking-[0.12em] text-fg-subtle">
								{t.category}
							</span>
							<span className="text-caption font-medium text-fg leading-snug">
								{t.name}
							</span>
						</div>
					))}
				</div>
			);
		case "challengeGrid":
			return (
				<div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-4">
					{block.items.map((c, i) => (
						<div
							key={i}
							className={
								c.solved
									? "rounded-lg border border-success/40 bg-success/10 p-5"
									: "rounded-lg border border-border bg-surface p-5"
							}
						>
							<p
								className={
									c.solved
										? "font-mono text-micro uppercase tracking-[0.12em] text-success mb-2.5"
										: "font-mono text-micro uppercase tracking-[0.12em] text-fg-subtle mb-2.5"
								}
							>
								{c.label}
							</p>
							<p
								className={
									c.solved
										? "text-caption text-success leading-relaxed"
										: "text-caption text-fg-muted leading-relaxed"
								}
							>
								{c.text}
							</p>
						</div>
					))}
				</div>
			);
		case "results":
			return (
				<div className="my-7 flex flex-col gap-3">
					{block.items.map((r, i) => (
						<div
							key={i}
							className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5"
						>
							{r.num ? (
								<span className="font-display text-h2 md:text-h2 text-success leading-none tracking-tight tnum min-w-[3.25rem] shrink-0 pt-0.5">
									{r.num}
								</span>
							) : (
								<div className="grid place-items-center size-8 rounded-md bg-accent/15 text-accent shrink-0">
									<Check className="size-4" />
								</div>
							)}
							<div className="flex-1">
								<p className="text-caption md:text-body font-medium text-fg leading-snug mb-1">
									{r.headline}
								</p>
								<p className="text-caption text-fg-muted leading-relaxed">
									{r.detail}
								</p>
							</div>
						</div>
					))}
				</div>
			);
		case "techRows":
			return (
				<div className="my-7 flex flex-col">
					{block.rows.map((row, i) => (
						<div
							key={i}
							className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 py-4 border-b border-border last:border-b-0"
						>
							<span className="font-mono text-micro uppercase tracking-[0.12em] text-fg-subtle md:min-w-[7rem] md:pt-1.5">
								{row.category}
							</span>
							<div className="flex flex-wrap gap-2">
								{row.tags.map((t) => (
									<span
										key={t}
										className="text-caption font-medium text-fg-muted bg-canvas-elevated border border-border rounded px-2.5 py-1"
									>
										{t}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			);
		case "featureGrid": {
			const iconMap = {
				users: Users,
				video: Video,
				music: Music,
				book: Book,
				upload: UploadCloud,
				check: CheckCircle2,
				sparkles: Sparkles,
			} as const;
			return (
				<div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					{block.items.map((f, i) => {
						const Icon = iconMap[f.icon ?? "sparkles"];
						return (
							<div
								key={i}
								className="rounded-lg border border-border bg-surface p-5"
							>
								<div className="grid place-items-center size-7 rounded-md bg-accent/15 border border-accent/30 text-accent mb-3">
									<Icon className="size-3.5" />
								</div>
								<p className="text-caption font-medium text-fg leading-snug mb-1.5">
									{f.title}
								</p>
								<p className="text-micro md:text-caption text-fg-subtle leading-relaxed">
									{f.desc}
								</p>
							</div>
						);
					})}
				</div>
			);
		}
		case "archDiagram": {
			const toneClass: Record<string, string> = {
				blue: "bg-accent/15 border-accent/40 text-accent",
				green: "bg-success/15 border-success/40 text-success",
				amber: "bg-warning/15 border-warning/40 text-warning",
				gray: "bg-canvas-elevated border-border text-fg-muted",
			};
			return (
				<div className="my-8 rounded-xl border border-border bg-surface overflow-hidden">
					<div className="px-5 py-3 border-b border-border flex items-center gap-2 font-mono text-micro uppercase tracking-[0.14em] text-fg-subtle">
						<span className="size-2 rounded-full bg-accent" />
						<span className="size-2 rounded-full bg-success" />
						<span className="size-2 rounded-full bg-warning" />
						<span className="ml-2">
							{block.caption ?? "System flow"}
						</span>
					</div>
					<div className="px-5 py-6 flex flex-col gap-5">
						{block.layers.map((layer, li) => {
							const Arrow =
								layer.separator === "biarrow"
									? ArrowLeftRight
									: ArrowRight;
							return (
								<div key={li} className="flex flex-col gap-2">
									<p className="font-mono text-micro uppercase tracking-[0.12em] text-fg-subtle">
										{layer.label}
									</p>
									<div className="flex flex-wrap items-center gap-2">
										{layer.nodes.map((n, ni) => (
											<div
												key={ni}
												className="flex items-center gap-2"
											>
												<span
													className={`whitespace-nowrap rounded-md border px-3 py-1.5 text-caption font-medium ${
														toneClass[
															n.tone ?? "gray"
														]
													}`}
												>
													{n.text}
												</span>
												{ni < layer.nodes.length - 1 && (
													<Arrow className="size-3.5 text-fg-subtle shrink-0" />
												)}
											</div>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			);
		}
	}
}
