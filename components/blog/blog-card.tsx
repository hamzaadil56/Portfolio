import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Blog } from "@/app/api/blogs/_store";
import { TechBadge } from "@/components/primitives/tech-badge";

export function BlogCard({ blog }: { blog: Blog }) {
	return (
		<Link
			href={`/blog/${blog.id}`}
			className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 hover:border-border-bright transition-colors duration-std ring-soft"
		>
			<div className="flex items-center justify-between gap-3">
				<span className="font-mono text-micro uppercase tracking-[0.24em] text-accent">
					{blog.platform}
				</span>
				<span className="font-mono text-micro text-fg-subtle">
					{blog.date}
				</span>
			</div>

			<h3 className="font-display font-semibold text-h3 text-fg leading-tight group-hover:text-accent transition-colors duration-micro">
				{blog.title}
			</h3>

			<p className="text-caption text-fg-muted leading-relaxed line-clamp-3">
				{blog.description}
			</p>

			<div className="flex flex-wrap gap-1.5">
				{blog.tags.slice(0, 4).map((t) => (
					<TechBadge key={t}>{t}</TechBadge>
				))}
			</div>

			<div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-border/60">
				<span className="inline-flex items-center gap-1.5 font-mono text-micro text-fg-subtle">
					<Clock className="size-3.5" />
					{blog.readTime}
				</span>
				<span className="inline-flex items-center gap-1.5 text-caption text-fg-muted group-hover:text-accent transition-colors duration-micro">
					Read
					<ArrowUpRight className="size-3.5" />
				</span>
			</div>
		</Link>
	);
}
