import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	tone?: "default" | "accent";
	className?: string;
};

export function TechBadge({ children, tone = "default", className }: Props) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md",
				"font-mono text-micro tracking-tight",
				tone === "default"
					? "border border-border bg-surface text-fg-muted"
					: "border border-accent/30 bg-accent/10 text-accent",
				className,
			)}
		>
			{children}
		</span>
	);
}
