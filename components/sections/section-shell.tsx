import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
	id: string;
	eyebrow?: string;
	title?: ReactNode;
	intro?: ReactNode;
	children: ReactNode;
	className?: string;
	containerClassName?: string;
	bare?: boolean;
};

export function SectionShell({
	id,
	eyebrow,
	title,
	intro,
	children,
	className,
	containerClassName,
	bare = false,
}: Props) {
	return (
		<section
			id={id}
			className={cn(
				"relative section-y w-full",
				bare ? "" : "border-t border-border/60",
				className,
			)}
		>
			<div
				className={cn(
					"container relative",
					containerClassName,
				)}
			>
				{(eyebrow || title) && (
					<header className="mb-8 md:mb-12 max-w-3xl">
						{eyebrow && (
							<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle mb-4">
								{eyebrow}
							</p>
						)}
						{title && (
							<h2 className="font-display font-semibold text-display-lg md:text-display-xl text-fg">
								{title}
							</h2>
						)}
						{intro && (
							<p className="mt-6 text-body-lg text-fg-muted max-w-2xl">
								{intro}
							</p>
						)}
					</header>
				)}
				{children}
			</div>
		</section>
	);
}
