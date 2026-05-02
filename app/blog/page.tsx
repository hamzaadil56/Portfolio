import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { SectionShell } from "@/components/sections/section-shell";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllBlogs } from "@/app/api/blogs/_store";

export const revalidate = 60;

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Notes, walkthroughs, and teardowns by Muhammad Hamza — engineering practice, AI, and shipping production systems.",
};

export default async function BlogIndexPage() {
	const blogs = await getAllBlogs();

	return (
		<>
			<ScrollProgress />
			<Nav />
			<main className="relative pt-24">
				<SectionShell
					id="blog"
					eyebrow="// blog"
					title={
						<>
							Notes from the{" "}
							<span className="text-gradient">build log</span>.
						</>
					}
					intro="Mostly engineering, sometimes AI, occasionally why I changed my mind. Cross-posted to Dev.to / Medium / Hashnode."
					bare
				>
					{blogs.length === 0 ? (
						<p className="text-fg-muted">
							Nothing published yet. Check back soon.
						</p>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
							{blogs.map((blog) => (
								<BlogCard key={blog.id} blog={blog} />
							))}
						</div>
					)}

					<p className="mt-12 font-mono text-micro text-fg-subtle">
						<Link
							href="/"
							className="hover:text-fg transition-colors"
						>
							← Back to home
						</Link>
					</p>
				</SectionShell>
			</main>
			<Footer />
		</>
	);
}
