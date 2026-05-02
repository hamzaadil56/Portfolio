"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, KeyRound, Send, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const TOKEN_KEY = "blog-admin-token";

const schema = z.object({
	title: z.string().min(3),
	url: z.string().url("Must be a full URL (https://…)"),
	platform: z.string().min(2),
	description: z.string().min(20),
	date: z.string().optional(),
	readTime: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function BlogForm() {
	const router = useRouter();
	const [token, setToken] = useState<string | null>(null);
	const [tokenInput, setTokenInput] = useState("");
	const [tags, setTags] = useState<string[]>([]);
	const [tagInput, setTagInput] = useState("");
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		const stored = sessionStorage.getItem(TOKEN_KEY);
		if (stored) setToken(stored);
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({ resolver: zodResolver(schema) });

	const addTag = () => {
		const t = tagInput.trim();
		if (!t || tags.includes(t)) return;
		setTags([...tags, t]);
		setTagInput("");
	};

	const onSubmit = async (data: FormValues) => {
		if (!token) {
			toast.error("Enter the admin token first.");
			return;
		}
		setSubmitting(true);
		try {
			const res = await fetch("/api/blogs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ ...data, tags }),
			});
			const json = await res.json();
			if (!res.ok) {
				if (res.status === 401) {
					toast.error("Token rejected. Re-enter and try again.");
					setToken(null);
					sessionStorage.removeItem(TOKEN_KEY);
				} else {
					toast.error(json?.error ?? "Failed to publish.");
				}
				return;
			}
			toast.success("Published.");
			reset();
			setTags([]);
			router.push("/blog");
			router.refresh();
		} catch (err) {
			console.error(err);
			toast.error("Network error. Try again.");
		} finally {
			setSubmitting(false);
		}
	};

	if (!token) {
		return (
			<div className="max-w-md rounded-xl border border-border bg-surface p-8 ring-soft space-y-5">
				<div className="flex items-center gap-2">
					<KeyRound className="size-4 text-accent" />
					<p className="font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle">
						Admin token
					</p>
				</div>
				<h1 className="font-display font-semibold text-h2 text-fg">
					Unlock posting
				</h1>
				<p className="text-caption text-fg-muted">
					Token is matched server-side against{" "}
					<code className="font-mono text-fg">BLOG_ADMIN_TOKEN</code>.
					This input is a UX convenience, not the security boundary.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const t = tokenInput.trim();
						if (!t) return;
						sessionStorage.setItem(TOKEN_KEY, t);
						setToken(t);
					}}
					className="space-y-3"
				>
					<Input
						type="password"
						value={tokenInput}
						onChange={(e) => setTokenInput(e.target.value)}
						placeholder="••••••••"
						autoFocus
						className="bg-canvas-elevated border-border text-fg"
					/>
					<button
						type="submit"
						className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-gradient-accent text-canvas font-medium text-caption hover:opacity-95 transition-opacity"
					>
						Continue
					</button>
				</form>
			</div>
		);
	}

	return (
		<div className="max-w-2xl space-y-8">
			<div className="flex items-center justify-between gap-3">
				<Link
					href="/blog"
					className="inline-flex items-center gap-1.5 font-mono text-micro uppercase tracking-[0.24em] text-fg-subtle hover:text-fg transition-colors"
				>
					<ArrowLeft className="size-3.5" />
					Back to blog
				</Link>
				<button
					onClick={() => {
						sessionStorage.removeItem(TOKEN_KEY);
						setToken(null);
					}}
					className="font-mono text-micro text-fg-subtle hover:text-danger transition-colors"
				>
					Lock
				</button>
			</div>

			<div className="space-y-2">
				<p className="font-mono text-micro uppercase tracking-[0.24em] text-accent">
					// blog · new
				</p>
				<h1 className="font-display font-semibold text-display-lg text-fg">
					New post
				</h1>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="rounded-xl border border-border bg-surface p-6 md:p-8 ring-soft space-y-6"
			>
				<div className="space-y-2">
					<Label htmlFor="title" className="text-caption">
						Title
					</Label>
					<Input
						id="title"
						className={cn(
							"bg-canvas-elevated border-border text-fg",
							errors.title && "border-danger",
						)}
						{...register("title")}
					/>
					{errors.title && (
						<p className="text-micro text-danger">
							{errors.title.message}
						</p>
					)}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="platform" className="text-caption">
							Platform
						</Label>
						<Input
							id="platform"
							placeholder="Dev.to / Medium / Hashnode"
							className={cn(
								"bg-canvas-elevated border-border text-fg",
								errors.platform && "border-danger",
							)}
							{...register("platform")}
						/>
						{errors.platform && (
							<p className="text-micro text-danger">
								{errors.platform.message}
							</p>
						)}
					</div>
					<div className="space-y-2">
						<Label htmlFor="url" className="text-caption">
							URL
						</Label>
						<Input
							id="url"
							placeholder="https://…"
							className={cn(
								"bg-canvas-elevated border-border text-fg",
								errors.url && "border-danger",
							)}
							{...register("url")}
						/>
						{errors.url && (
							<p className="text-micro text-danger">
								{errors.url.message}
							</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="date" className="text-caption">
							Year
						</Label>
						<Input
							id="date"
							placeholder="2026"
							className="bg-canvas-elevated border-border text-fg"
							{...register("date")}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="readTime" className="text-caption">
							Read time
						</Label>
						<Input
							id="readTime"
							placeholder="6 min read"
							className="bg-canvas-elevated border-border text-fg"
							{...register("readTime")}
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="description" className="text-caption">
						Description
					</Label>
					<Textarea
						id="description"
						rows={4}
						className={cn(
							"bg-canvas-elevated border-border text-fg resize-none",
							errors.description && "border-danger",
						)}
						{...register("description")}
					/>
					{errors.description && (
						<p className="text-micro text-danger">
							{errors.description.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label className="text-caption">Tags</Label>
					<div className="flex flex-wrap gap-2 items-center rounded-md border border-border bg-canvas-elevated px-2 py-2">
						{tags.map((t) => (
							<span
								key={t}
								className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-micro"
							>
								{t}
								<button
									type="button"
									onClick={() =>
										setTags(tags.filter((x) => x !== t))
									}
									aria-label={`Remove tag ${t}`}
								>
									<X className="size-3" />
								</button>
							</span>
						))}
						<input
							value={tagInput}
							onChange={(e) => setTagInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === ",") {
									e.preventDefault();
									addTag();
								}
							}}
							placeholder={
								tags.length === 0
									? "Type and hit Enter…"
									: ""
							}
							className="flex-1 min-w-32 bg-transparent outline-none text-caption text-fg placeholder:text-fg-subtle"
						/>
					</div>
				</div>

				<div className="flex items-center justify-end gap-3 pt-2 border-t border-border/60">
					<button
						type="submit"
						disabled={submitting}
						className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-accent text-canvas font-medium text-caption hover:opacity-95 transition-opacity disabled:opacity-50"
					>
						<Send className="size-3.5" />
						{submitting ? "Publishing…" : "Publish"}
					</button>
				</div>
			</form>
		</div>
	);
}
