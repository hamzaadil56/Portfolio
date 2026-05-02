import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { TechBadge } from "@/components/primitives/tech-badge";
import { getBlogById, getAllBlogs } from "@/app/api/blogs/_store";

export const revalidate = 60;

export async function generateStaticParams() {
	const blogs = await getAllBlogs();
	return blogs.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const blog = await getBlogById(params.id);
	if (!blog) return { title: "Blog post not found" };
	return {
		title: blog.title,
		description: blog.description,
		openGraph: {
			title: blog.title,
			description: blog.description,
			url: blog.url,
		},
	};
}

export default async function BlogDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const blog = await getBlogById(params.id);
	if (!blog) notFound();

	return (
		<>
			<ScrollProgress />
			<Nav />
			<main className="relative pt-32 pb-32">
				<article className="container max-w-3xl">
					<Link
						href="/blog"
						className="inline-flex items-center gap-1.5 font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle hover:text-fg transition-colors mb-12"
					>
						<ArrowLeft className="size-3.5" />
						All posts
					</Link>

					<div className="space-y-6">
						<div className="flex items-center gap-3">
							<span className="font-mono text-micro uppercase tracking-[0.24em] text-accent">
								{blog.platform}
							</span>
							<span className="size-1 rounded-full bg-fg-subtle" />
							<span className="font-mono text-micro text-fg-subtle">
								{blog.date}
							</span>
							<span className="size-1 rounded-full bg-fg-subtle" />
							<span className="inline-flex items-center gap-1.5 font-mono text-micro text-fg-subtle">
								<Clock className="size-3.5" />
								{blog.readTime}
							</span>
						</div>

						<h1 className="font-display font-semibold text-display-lg md:text-display-xl text-fg leading-tight">
							{blog.title}
						</h1>

						<p className="text-body-lg text-fg-muted leading-relaxed">
							{blog.description}
						</p>

						<div className="flex flex-wrap gap-1.5">
							{blog.tags.map((t) => (
								<TechBadge key={t}>{t}</TechBadge>
							))}
						</div>
					</div>

					<div className="mt-16 rounded-xl border border-border bg-surface p-8 ring-soft text-center space-y-6">
						<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
							Originally published on {blog.platform}
						</p>
						<p className="text-body text-fg-muted">
							The full article lives on {blog.platform}. Continue
							reading there to keep the discussion in one place.
						</p>
						<a
							href={blog.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-accent text-canvas font-medium text-caption hover:opacity-95 transition-opacity"
						>
							Read on {blog.platform}
							<ArrowUpRight className="size-4" />
						</a>
					</div>
				</article>
			</main>
			<Footer />
		</>
	);
}
