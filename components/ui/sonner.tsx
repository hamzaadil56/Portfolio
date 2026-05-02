"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { resolvedTheme } = useTheme();

	return (
		<Sonner
			theme={(resolvedTheme as "light" | "dark") ?? "dark"}
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						"group toast bg-canvas-elevated text-fg border border-border shadow-lg",
					description: "text-fg-muted",
					actionButton: "bg-accent text-canvas",
					cancelButton: "bg-surface-2 text-fg-muted",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
