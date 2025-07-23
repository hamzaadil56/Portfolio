"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Github,
	ExternalLink,
	Mail,
	Code,
	Briefcase,
	GraduationCap,
	Award,
	Linkedin,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import ResponsiveNav from "@/components/ui/responsive-nav";
import {
	OptimizedBackgroundAnimation,
	optimizedFadeInUp,
	optimizedStaggerContainer,
	optimizedViewport,
} from "@/components/ui/optimized-motion";

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// Ensure page starts at the top
		if (typeof window !== "undefined") {
			window.history.scrollRestoration = "manual";
			window.scrollTo(0, 0);
		}

		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", updateMousePosition);
		return () =>
			window.removeEventListener("mousemove", updateMousePosition);
	}, []);

	const skills = [
		"Frontend Development",
		"Backend Development",
		"LLM Application Development",
		"React.js",
		"Next.js",
		"Node.js",
		"Python",
		"Tailwind CSS",
		"TypeScript",
		"AWS",
		"MongoDB",
		"PostgreSQL",
		"FastAPI",
		"OpenAI",
		"Vector DB",
		"LangChain",
		"RAG",
		"Redux",
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 relative transition-colors duration-300">
			{/* Optimized background animation */}
			<OptimizedBackgroundAnimation />

			{/* Mouse-following element - only on larger screens */}
			<div
				className="absolute w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-2xl hidden lg:block pointer-events-none"
				style={{
					transform: `translate(${mousePosition.x - 192}px, ${
						mousePosition.y - 192
					}px)`,
					willChange: "transform",
				}}
			/>

			{/* Navigation */}
			<ResponsiveNav />

			{/* Hero Section */}
			<motion.section
				className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20"
				initial="initial"
				animate="animate"
			>
				<div className="text-center">
					<motion.div variants={optimizedFadeInUp} className="mb-6">
						<span className="inline-block px-3 md:px-4 py-2 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium mb-4 backdrop-blur-sm">
							Available for new opportunities
						</span>
						<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-4 md:mb-6 heading-fix">
							Software
							<span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gradient-text-fix">
								Engineer
							</span>
						</h1>
						<p className="text-lg md:text-xl text-slate-600 dark:text-white/70 leading-relaxed mb-6 md:mb-8 max-w-4xl mx-auto">
							Software Engineer with over 2 years of experience
							building scalable web applications, Generative
							AI-powered solutions, and cloud-native
							architectures. Passionate about creating
							production-ready solutions that make a real impact.
						</p>
					</motion.div>

					<motion.div
						variants={optimizedFadeInUp}
						className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 justify-center"
					>
						<Link
							href="/projects"
							className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
						>
							View Projects
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</Link>
						<a
							href="mailto:hamzaadil56@gmail.com"
							className="group flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
						>
							<Mail className="w-4 h-4" />
							Get in Touch
						</a>
					</motion.div>

					<motion.div
						variants={optimizedFadeInUp}
						className="flex justify-center gap-6"
					>
						<a
							href="https://github.com/hamzaadil56"
							target="_blank"
							className="text-slate-500 dark:text-white/60 hover:text-slate-700 dark:hover:text-white transition-colors"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://www.linkedin.com/in/muhammad-hamza-adil/"
							target="_blank"
							className="text-slate-500 dark:text-white/60 hover:text-slate-700 dark:hover:text-white transition-colors"
							aria-label="LinkedIn"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="https://x.com/hamza_chemE_dev"
							target="_blank"
							className="text-slate-500 dark:text-white/60 hover:text-slate-700 dark:hover:text-white transition-colors"
							aria-label="Twitter"
						>
							<Twitter className="w-6 h-6" />
						</a>
					</motion.div>
				</div>
			</motion.section>

			{/* Skills Section */}
			<motion.section
				className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				viewport={optimizedViewport}
			>
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 text-center heading-fix"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={optimizedViewport}
				>
					Technologies & Skills
				</motion.h2>
				<motion.div
					className="flex flex-wrap gap-3 md:gap-4 justify-center"
					variants={optimizedStaggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={optimizedViewport}
				>
					{skills.map((skill, index) => (
						<motion.div
							key={skill}
							variants={{
								initial: { opacity: 0, scale: 0.9 },
								animate: {
									opacity: 1,
									scale: 1,
									transition: {
										delay: index * 0.03,
										duration: 0.3,
									},
								},
							}}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.15 },
							}}
							className="px-4 md:px-6 py-2 md:py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-lg text-slate-700 dark:text-white/80 hover:text-slate-800 dark:hover:text-white hover:border-blue-400/50 transition-all duration-300 cursor-default text-sm md:text-base"
						>
							{skill}
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			{/* Quick Stats */}
			<motion.section
				className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				viewport={optimizedViewport}
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
					{[
						{ icon: Code, label: "Years Experience", value: "2+" },
						{
							icon: Briefcase,
							label: "Projects Completed",
							value: "15+",
						},
						{
							icon: GraduationCap,
							label: "Education",
							value: "B.E.",
						},
						{
							icon: Award,
							label: "Hackathon Awards",
							value: "Top 10",
						},
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={optimizedViewport}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.15 },
							}}
							className="text-center group cursor-default"
						>
							<div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
								<stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
							</div>
							<h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2 heading-fix">
								{stat.value}
							</h3>
							<p className="text-slate-600 dark:text-white/60 text-sm md:text-base">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				viewport={optimizedViewport}
			>
				<motion.h2
					className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 md:mb-6 heading-fix"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={optimizedViewport}
				>
					Let's Build Something Amazing Together
				</motion.h2>
				<motion.p
					className="text-lg md:text-xl text-slate-600 dark:text-white/70 mb-6 md:mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={optimizedViewport}
				>
					I'm always excited to work on innovative projects and solve
					complex challenges.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={optimizedViewport}
				>
					<a
						href="mailto:hamzaadil56@gmail.com"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
					>
						Start a Conversation
						<ArrowRight className="w-5 h-5" />
					</a>
				</motion.div>
			</motion.section>
		</div>
	);
}
