"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, User, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setAdminSession } from "@/lib/auth";
import { OptimizedBackgroundAnimation } from "@/components/ui/optimized-motion";

export default function AdminLogin() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (error) setError("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		console.log("Submitting login form with:", {
			username: formData.username,
			password: "***",
		});

		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: formData.username.trim(),
					password: formData.password.trim(),
				}),
			});

			console.log("Login response status:", response.status);
			const result = await response.json();
			console.log("Login response:", result);

			if (result.success) {
				console.log("Login successful, setting session");
				setAdminSession();
				console.log("Redirecting to admin create page");
				router.push("/admin/blogs/create");
			} else {
				console.log("Login failed:", result.error);
				setError(result.error || "Authentication failed");
			}
		} catch (error) {
			console.error("Login error:", error);
			setError("Network error. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center transition-colors duration-300">
			{/* Optimized background animation */}
			<OptimizedBackgroundAnimation />

			{/* Navigation */}
			<motion.nav
				className="absolute top-0 left-0 right-0 z-50 p-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<Link
						href="/blogs"
						className="flex items-center gap-2 text-slate-600 dark:text-white/80 hover:text-slate-800 dark:hover:text-white transition-colors"
					>
						<ArrowLeft className="w-5 h-5" />
						Back to Blogs
					</Link>
				</div>
			</motion.nav>

			{/* Login Form */}
			<div className="relative z-10 w-full max-w-md px-6">
				<motion.div
					className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Header */}
					<div className="text-center mb-8">
						<motion.div
							className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							<Lock className="w-8 h-8 text-white" />
						</motion.div>
						<h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
							Admin Login
						</h1>
						<p className="text-slate-600 dark:text-white/70">
							Enter your credentials to manage blogs
						</p>
					</div>

					{/* Error Message */}
					{error && (
						<motion.div
							className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mb-6"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
						>
							<p className="text-red-500 dark:text-red-400 text-sm text-center">
								{error}
							</p>
						</motion.div>
					)}

					{/* Login Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Username Field */}
						<div>
							<label
								htmlFor="username"
								className="block text-slate-800 dark:text-white font-medium mb-2"
							>
								Username
							</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-white/40" />
								<input
									type="text"
									id="username"
									name="username"
									value={formData.username}
									onChange={handleInputChange}
									required
									className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
									placeholder="Enter admin username"
								/>
							</div>
						</div>

						{/* Password Field */}
						<div>
							<label
								htmlFor="password"
								className="block text-slate-800 dark:text-white font-medium mb-2"
							>
								Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-white/40" />
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									required
									className="w-full pl-12 pr-12 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
									placeholder="Enter admin password"
								/>
								<button
									type="button"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-white/40 hover:text-slate-600 dark:hover:text-white/60 transition-colors"
								>
									{showPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>

						{/* Submit Button */}
						<motion.button
							type="submit"
							disabled={loading}
							className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
							whileHover={{ scale: loading ? 1 : 1.02 }}
							whileTap={{ scale: loading ? 1 : 0.98 }}
						>
							{loading ? (
								<>
									<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
									Authenticating...
								</>
							) : (
								<>
									<Lock className="w-5 h-5" />
									Login
								</>
							)}
						</motion.button>
					</form>

					{/* Demo Credentials */}
					<motion.div
						className="mt-8 p-4 bg-slate-200/50 dark:bg-slate-700/30 border border-slate-300 dark:border-white/10 rounded-lg"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<p className="text-slate-500 dark:text-white/60 text-sm text-center mb-2">
							Demo Credentials:
						</p>
						<div className="text-center space-y-1">
							<p className="text-slate-700 dark:text-white/80 text-sm">
								Username:{" "}
								<span className="font-mono bg-slate-300 dark:bg-slate-600/50 px-2 py-1 rounded">
									admin
								</span>
							</p>
							<p className="text-slate-700 dark:text-white/80 text-sm">
								Password:{" "}
								<span className="font-mono bg-slate-300 dark:bg-slate-600/50 px-2 py-1 rounded">
									admin123
								</span>
							</p>
						</div>
						<div className="mt-3 text-center">
							<button
								type="button"
								onClick={() =>
									setFormData({
										username: "admin",
										password: "admin123",
									})
								}
								className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-sm underline transition-colors"
							>
								Click to auto-fill credentials
							</button>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
