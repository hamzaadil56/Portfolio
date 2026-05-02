import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { sectionNav } from "@/data/nav";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative border-t border-border/60 mt-24">
			<div className="container py-16 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
					<div className="md:col-span-5 space-y-6">
						<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
							Let&apos;s build
						</p>
						<h3 className="font-display font-semibold text-display-lg text-fg">
							Have a brief?{" "}
							<span className="text-gradient">
								Let&apos;s talk.
							</span>
						</h3>
						<a
							href={`mailto:${profile.email}`}
							className="inline-flex items-center gap-2 text-body-lg text-fg-muted hover:text-accent transition-colors duration-micro"
						>
							{profile.email}
							<ArrowUpRight className="size-4" />
						</a>
					</div>

					<div className="md:col-span-3">
						<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle mb-4">
							Sitemap
						</p>
						<ul className="space-y-2.5">
							{sectionNav.map((s) => (
								<li key={s.id}>
									<a
										href={`/#${s.id}`}
										className="text-caption text-fg-muted hover:text-fg transition-colors duration-micro"
									>
										{s.label}
									</a>
								</li>
							))}
							<li>
								<Link
									href="/blog"
									className="text-caption text-fg-muted hover:text-fg transition-colors duration-micro"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div className="md:col-span-4">
						<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle mb-4">
							Elsewhere
						</p>
						<ul className="space-y-2.5">
							{profile.socials.map((s) => (
								<li key={s.label}>
									<a
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-between gap-3 w-full text-caption text-fg-muted hover:text-fg transition-colors duration-micro group"
									>
										<span>{s.label}</span>
										<span className="font-mono text-micro text-fg-subtle group-hover:text-accent transition-colors">
											{s.handle}
										</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
					<p className="font-mono text-micro text-fg-subtle">
						© {year} {profile.name}. Built in Karachi.
					</p>
					<p className="font-mono text-micro text-fg-subtle">
						{profile.domain}
					</p>
				</div>
			</div>
		</footer>
	);
}
