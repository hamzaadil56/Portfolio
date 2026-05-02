"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { sectionNav } from "@/data/nav";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Nav() {
	const pathname = usePathname();
	const onHome = pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState<string>("");
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!onHome) return;
		const ids = sectionNav.map((n) => n.id);
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort(
						(a, b) => b.intersectionRatio - a.intersectionRatio
					)[0];
				if (visible) setActive(visible.target.id);
			},
			{
				rootMargin: "-40% 0px -50% 0px",
				threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
			}
		);
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [onHome]);

	const link = (id: string) => (onHome ? `#${id}` : `/#${id}`);

	const toggleTheme = () =>
		setTheme(resolvedTheme === "dark" ? "light" : "dark");

	return (
		<header
			className={cn(
				"fixed top-0 inset-x-0 z-50 transition-colors duration-std",
				scrolled
					? "bg-canvas-elevated/75 backdrop-blur-xl border-b border-border/60"
					: "bg-transparent border-b border-transparent"
			)}
		>
			<div className="container flex h-14 items-center justify-between gap-6">
				<Link
					href="/"
					className="flex items-center gap-2 group"
					aria-label={`${profile.name} home`}
				>
					<span className="grid place-items-center size-8 rounded-md bg-gradient-accent text-canvas font-display font-bold text-[13px] tracking-tight">
						<Image
							src={profile.monogram}
							alt={profile.name}
							className="size-4 rounded-sm"
							width={32}
							height={32}
						/>
						{/* {profile.monogram} */}
					</span>
					<span className="hidden sm:inline font-display font-medium text-fg group-hover:text-accent transition-colors duration-micro">
						{profile.name.split(" ")[0]}{" "}
						{profile.name.split(" ")[1]}
					</span>
				</Link>

				<nav className="hidden lg:flex items-center gap-1">
					{sectionNav.map((item) => (
						<a
							key={item.id}
							href={link(item.id)}
							className={cn(
								"relative px-3 py-2 text-caption text-fg-muted hover:text-fg transition-colors duration-micro",
								onHome && active === item.id && "text-fg"
							)}
						>
							{item.label}
							{onHome && active === item.id && (
								<span className="absolute left-3 right-3 -bottom-px h-px bg-gradient-accent" />
							)}
						</a>
					))}
					<a
						href="/blog"
						className={cn(
							"relative px-3 py-2 text-caption text-fg-muted hover:text-fg transition-colors duration-micro",
							pathname?.startsWith("/blog") && "text-fg"
						)}
					>
						Blog
					</a>
				</nav>

				<div className="flex items-center gap-2">
					<button
						onClick={toggleTheme}
						aria-label="Toggle theme"
						className="grid place-items-center size-8 rounded-md text-fg-muted hover:text-fg transition-colors duration-micro"
					>
						{mounted && resolvedTheme === "dark" ? (
							<Sun className="size-4" />
						) : (
							<Moon className="size-4" />
						)}
					</button>

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="lg:hidden text-fg"
								aria-label="Open menu"
							>
								<Menu className="size-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="bg-canvas-elevated border-l border-border w-full max-w-md"
						>
							<div className="flex flex-col h-full">
								<div className="flex items-center justify-between">
									<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
										Navigate
									</p>
								</div>
								<nav className="mt-8 flex flex-col gap-1">
									{sectionNav.map((item) => (
										<SheetClose asChild key={item.id}>
											<a
												href={link(item.id)}
												className="font-display text-h2 text-fg hover:text-accent transition-colors duration-micro py-2"
											>
												{item.label}
											</a>
										</SheetClose>
									))}
									<SheetClose asChild>
										<a
											href="/blog"
											className="font-display text-h2 text-fg hover:text-accent transition-colors duration-micro py-2"
										>
											Blog
										</a>
									</SheetClose>
								</nav>
								<div className="mt-auto pt-8 border-t border-border space-y-3">
									<a
										href={`mailto:${profile.email}`}
										className="block text-fg-muted hover:text-fg text-caption"
									>
										{profile.email}
									</a>
									<div className="flex flex-wrap gap-x-4 gap-y-2">
										{profile.socials.map((s) => (
											<a
												key={s.label}
												href={s.href}
												target="_blank"
												rel="noopener noreferrer"
												className="font-mono text-micro text-fg-subtle hover:text-accent transition-colors duration-micro"
											>
												{s.label}
											</a>
										))}
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
