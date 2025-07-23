"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Plus, X, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllBlogs } from "@/lib/blog-data";
import { OptimizedBackgroundAnimation } from "@/components/ui/optimized-motion";

interface Blog {
	id: string;
	title: string;
	url: string;
	platform: string;
	date: string;
	readTime: string;
	description: string;
	tags: string[];
	gradient: string;
	platformColor: string;
}

export default function EditBlog({ params }: { params: { id: string } }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [fetchLoading, setFetchLoading] = useState(true);
	const [blog, setBlog] = useState<Blog | null>(null);
	const [formData, setFormData] = useState({
		title: "",
		url: "",
		platform: "",
		date: "",
		readTime: "",
		description: "",
		tags: [] as string[],
		gradient: "from-blue-600 to-purple-600",
		platformColor: "text-blue-400",
	});
	const [newTag, setNewTag] = useState("");

	const gradientOptions = [
		{ value: "from-blue-600 to-purple-600", label: "Blue to Purple" },
		{ value: "from-green-600 to-blue-600", label: "Green to Blue" },
		{ value: "from-purple-600 to-pink-600", label: "Purple to Pink" },
		{ value: "from-orange-600 to-red-600", label: "Orange to Red" },
		{ value: "from-cyan-600 to-blue-600", label: "Cyan to Blue" },
		{ value: "from-yellow-600 to-orange-600", label: "Yellow to Orange" },
	];

	const platformColorOptions = [
		{ value: "text-blue-400", label: "Blue" },
		{ value: "text-green-400", label: "Green" },
		{ value: "text-purple-400", label: "Purple" },
		{ value: "text-orange-400", label: "Orange" },
		{ value: "text-cyan-400", label: "Cyan" },
		{ value: "text-yellow-400", label: "Yellow" },
	];

	useEffect(() => {
		fetchBlog();
	}, [params.id]);

	const fetchBlog = async () => {
		try {
			setFetchLoading(true);
			const response = await fetch(`/api/blogs/${params.id}`);
			const result = await response.json();

			if (result.success) {
				setBlog(result.data);
				setFormData({
					title: result.data.title,
					url: result.data.url,
					platform: result.data.platform,
					date: result.data.date,
					readTime: result.data.readTime,
					description: result.data.description,
					tags: result.data.tags,
					gradient: result.data.gradient,
					platformColor: result.data.platformColor,
				});
			} else {
				alert(result.error || "Blog not found");
				router.push("/blogs");
			}
		} catch (error) {
			console.error("Error fetching blog:", error);
			alert("Failed to fetch blog");
			router.push("/blogs");
		} finally {
			setFetchLoading(false);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const addTag = () => {
		if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
			setFormData((prev) => ({
				...prev,
				tags: [...prev.tags, newTag.trim()],
			}));
			setNewTag("");
		}
	};

	const removeTag = (tagToRemove: string) => {
		setFormData((prev) => ({
			...prev,
			tags: prev.tags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(`/api/blogs/${params.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (result.success) {
				router.push("/blogs");
			} else {
				alert(result.error || "Failed to update blog");
			}
		} catch (error) {
			console.error("Error updating blog:", error);
			alert("Failed to update blog");
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async () => {
		if (
			!confirm(
				"Are you sure you want to delete this blog post? This action cannot be undone."
			)
		) {
			return;
		}

		try {
			const response = await fetch(`/api/blogs/${params.id}`, {
				method: "DELETE",
			});

			const result = await response.json();

			if (result.success) {
				router.push("/blogs");
			} else {
				alert(result.error || "Failed to delete blog");
			}
		} catch (error) {
			console.error("Error deleting blog:", error);
			alert("Failed to delete blog");
		}
	};

	if (fetchLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
				<div className="flex items-center gap-3 text-white">
					<div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
					<span className="text-xl">Loading blog...</span>
				</div>
			</div>
		);
	}

	if (!blog) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
				<div className="text-center">
					<div className="text-red-400 text-xl mb-4">
						Blog not found
					</div>
					<Link
						href="/blogs"
						className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
					>
						Back to Blogs
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
			{/* Optimized background animation */}
			<OptimizedBackgroundAnimation />

			{/* Navigation */}
			<motion.nav
				className="relative z-50 p-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<Link
						href="/blogs"
						className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
					>
						<ArrowLeft className="w-5 h-5" />
						Back to Blogs
					</Link>
				</div>
			</motion.nav>

			<div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
						Edit
						<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Blog Post
						</span>
					</h1>
					<p className="text-lg text-white/70">
						Update your blog post details
					</p>
				</motion.div>

				{/* Form */}
				<motion.div
					className="bg-slate-800/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Title */}
						<div>
							<label
								htmlFor="title"
								className="block text-white font-medium mb-2"
							>
								Title *
							</label>
							<input
								type="text"
								id="title"
								name="title"
								value={formData.title}
								onChange={handleInputChange}
								required
								className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
								placeholder="Enter blog title"
							/>
						</div>

						{/* URL */}
						<div>
							<label
								htmlFor="url"
								className="block text-white font-medium mb-2"
							>
								URL *
							</label>
							<input
								type="url"
								id="url"
								name="url"
								value={formData.url}
								onChange={handleInputChange}
								required
								className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
								placeholder="https://example.com/your-blog-post"
							/>
						</div>

						{/* Platform and Date */}
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="platform"
									className="block text-white font-medium mb-2"
								>
									Platform *
								</label>
								<input
									type="text"
									id="platform"
									name="platform"
									value={formData.platform}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
									placeholder="e.g., Medium, Dev.to"
								/>
							</div>

							<div>
								<label
									htmlFor="date"
									className="block text-white font-medium mb-2"
								>
									Date
								</label>
								<input
									type="text"
									id="date"
									name="date"
									value={formData.date}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
									placeholder="2024"
								/>
							</div>
						</div>

						{/* Read Time */}
						<div>
							<label
								htmlFor="readTime"
								className="block text-white font-medium mb-2"
							>
								Read Time
							</label>
							<input
								type="text"
								id="readTime"
								name="readTime"
								value={formData.readTime}
								onChange={handleInputChange}
								className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
								placeholder="5 min read"
							/>
						</div>

						{/* Description */}
						<div>
							<label
								htmlFor="description"
								className="block text-white font-medium mb-2"
							>
								Description *
							</label>
							<textarea
								id="description"
								name="description"
								value={formData.description}
								onChange={handleInputChange}
								required
								rows={4}
								className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-vertical"
								placeholder="Brief description of your blog post"
							/>
						</div>

						{/* Tags */}
						<div>
							<label className="block text-white font-medium mb-2">
								Tags
							</label>
							<div className="flex gap-2 mb-3">
								<input
									type="text"
									value={newTag}
									onChange={(e) => setNewTag(e.target.value)}
									onKeyPress={(e) =>
										e.key === "Enter" &&
										(e.preventDefault(), addTag())
									}
									className="flex-1 px-4 py-2 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
									placeholder="Add a tag"
								/>
								<button
									type="button"
									onClick={addTag}
									className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
								>
									<Plus className="w-4 h-4" />
								</button>
							</div>
							<div className="flex flex-wrap gap-2">
								{formData.tags.map((tag, index) => (
									<span
										key={index}
										className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 text-white rounded-lg text-sm border border-white/10"
									>
										{tag}
										<button
											type="button"
											onClick={() => removeTag(tag)}
											className="text-white/60 hover:text-white"
										>
											<X className="w-3 h-3" />
										</button>
									</span>
								))}
							</div>
						</div>

						{/* Styling Options */}
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="gradient"
									className="block text-white font-medium mb-2"
								>
									Gradient
								</label>
								<select
									id="gradient"
									name="gradient"
									value={formData.gradient}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
								>
									{gradientOptions.map((option) => (
										<option
											key={option.value}
											value={option.value}
										>
											{option.label}
										</option>
									))}
								</select>
							</div>

							<div>
								<label
									htmlFor="platformColor"
									className="block text-white font-medium mb-2"
								>
									Platform Color
								</label>
								<select
									id="platformColor"
									name="platformColor"
									value={formData.platformColor}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
								>
									{platformColorOptions.map((option) => (
										<option
											key={option.value}
											value={option.value}
										>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-4 pt-6">
							<button
								type="submit"
								disabled={loading}
								className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
							>
								{loading ? (
									<>
										<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
										Updating...
									</>
								) : (
									<>
										<Save className="w-4 h-4" />
										Update Blog Post
									</>
								)}
							</button>

							<button
								type="button"
								onClick={handleDelete}
								className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
							>
								<Trash2 className="w-4 h-4" />
								Delete
							</button>

							<Link
								href="/blogs"
								className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg font-medium transition-colors border border-white/10 hover:border-white/20"
							>
								Cancel
							</Link>
						</div>
					</form>
				</motion.div>
			</div>
		</div>
	);
}
