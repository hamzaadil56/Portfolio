import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
	return (
		<main className="min-h-dvh grid place-items-center bg-canvas">
			<div className="container max-w-xl text-center space-y-8">
				<p className="font-mono text-micro uppercase tracking-[0.3em] text-fg-subtle">
					// 404
				</p>
				<h1 className="font-display font-semibold text-display-2xl text-gradient">
					Off the path.
				</h1>
				<p className="text-body-lg text-fg-muted">
					Whatever you were looking for isn&apos;t here. Probably my
					fault.
				</p>
				<Link
					href="/"
					className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-surface hover:border-border-bright text-fg text-caption transition-colors duration-micro"
				>
					<ArrowLeft className="size-4" />
					Back home
				</Link>
			</div>
		</main>
	);
}
