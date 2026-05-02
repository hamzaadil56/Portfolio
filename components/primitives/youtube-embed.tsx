"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
	youtubeId: string;
	title: string;
	className?: string;
	thumbnailClassName?: string;
};

export function YoutubeEmbed({
	youtubeId,
	title,
	className,
	thumbnailClassName,
}: Props) {
	const [open, setOpen] = useState(false);
	const thumb = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button
					type="button"
					className={cn(
						"group relative w-full overflow-hidden rounded-lg border border-border bg-surface",
						"hover:border-border-bright transition-colors duration-std",
						"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
						className,
					)}
					aria-label={`Play video: ${title}`}
				>
					<div
						className={cn(
							"relative aspect-video w-full",
							thumbnailClassName,
						)}
					>
						<Image
							src={thumb}
							alt={title}
							fill
							className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-cinematic ease-out-expo"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-canvas/10 to-transparent" />
						<div className="absolute inset-0 grid place-items-center">
							<span className="grid place-items-center size-16 rounded-full bg-canvas/70 backdrop-blur-md border border-fg/20 text-fg group-hover:scale-110 group-hover:bg-accent/80 group-hover:border-accent transition-all duration-std">
								<Play className="size-6 ml-0.5" fill="currentColor" />
							</span>
						</div>
					</div>
				</button>
			</DialogTrigger>

			<DialogContent
				className="max-w-5xl !p-0 !gap-0 bg-canvas-elevated border border-border overflow-hidden"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<DialogTitle className="sr-only">{title}</DialogTitle>
				<div className="relative aspect-video w-full bg-canvas">
					{open && (
						<iframe
							src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
							title={title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="absolute inset-0 size-full"
						/>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
