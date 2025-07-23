"use client";

import { motion } from "framer-motion";
import {
	ArrowLeft,
	ExternalLink,
	Calendar,
	Users,
	Code,
	Zap,
	Database,
	Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ResponsiveNav from "@/components/ui/responsive-nav";
import {
	OptimizedBackgroundAnimation,
	optimizedFadeInUp,
} from "@/components/ui/optimized-motion";
import { projects } from "@/data";

export default function Projects() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 transition-colors duration-300">
			{/* Optimized background animation */}
			<OptimizedBackgroundAnimation />

			{/* Navigation */}
			<ResponsiveNav
				backLink={{
					href: "/",
					label: "Back to Home",
					icon: <ArrowLeft className="w-5 h-5" />,
				}}
				currentPath="/projects"
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
				{/* Header */}
				<motion.div
					className="text-center mb-12 md:mb-16"
					initial="initial"
					animate="animate"
				>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 md:mb-6 heading-fix">
						Featured
						<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent gradient-text-fix">
							Projects
						</span>
					</h1>
					<p className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-3xl mx-auto">
						A showcase of innovative solutions I've built, from
						AI-powered platforms to scalable web applications that
						serve millions of users.
					</p>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					className="space-y-8 md:space-y-12"
					initial="initial"
					animate="animate"
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={optimizedFadeInUp}
							whileHover={{
								y: -2,
								transition: { duration: 0.2 },
							}}
							className={`group bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:${project.colors.secondary} rounded-2xl md:rounded-3xl overflow-hidden hover:border-opacity-60 transition-all duration-300`}
						>
							<div className="grid lg:grid-cols-2 gap-0">
								{/* Project Image */}
								<div className="relative overflow-hidden lg:order-1 h-64 lg:h-auto">
									<motion.div
										className="w-full h-full"
										whileHover={{ scale: 1.05 }}
									>
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-700"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											priority={index < 2}
										/>
									</motion.div>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
									<div className="absolute top-4 left-4">
										<span
											className={`px-3 py-1 bg-gradient-to-r ${project.colors.primary} text-white rounded-full text-sm font-medium`}
										>
											{project.category}
										</span>
									</div>
									<div className="absolute bottom-4 right-4 flex gap-2">
										<a
											href={project?.link}
											target="_blank"
											className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${project.colors.accent} hover:bg-white/20 transition-colors cursor-pointer`}
										>
											<ExternalLink className="w-5 h-5" />
										</a>
									</div>
								</div>

								{/* Project Content */}
								<div className="p-6 md:p-8 lg:p-12 lg:order-2">
									<div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
										<div className="flex items-center gap-2 text-slate-500 dark:text-white/60 text-sm">
											<Calendar className="w-4 h-4" />
											{project.year}
										</div>
										<div className="flex items-center gap-2 text-slate-500 dark:text-white/60 text-sm">
											<Users className="w-4 h-4" />
											{project.team}
										</div>
										<div
											className={`px-3 py-1 bg-gradient-to-r ${project.colors.primary} bg-opacity-20 ${project.colors.accent} rounded-full text-sm`}
										>
											{project.status}
										</div>
									</div>

									<h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2 heading-fix">
										{project.title}
									</h3>
									<h4
										className={`text-base md:text-lg font-medium ${project.colors.accent} mb-4`}
									>
										{project.subtitle}
									</h4>
									<p className="text-slate-600 dark:text-white/70 mb-6 leading-relaxed text-sm md:text-base">
										{project.description}
									</p>

									{/* Key Achievements */}
									<div className="mb-6">
										<h5 className="text-slate-800 dark:text-white font-semibold mb-3 flex items-center gap-2 text-sm md:text-base heading-fix">
											<Zap className="w-4 h-4" />
											Key Achievements
										</h5>
										<ul className="space-y-2">
											{project.achievements.map(
												(achievement, achIndex) => (
													<li
														key={achIndex}
														className="flex items-start gap-3 text-slate-600 dark:text-white/70 text-xs md:text-sm"
													>
														<div
															className={`w-2 h-2 ${project.colors.primary} bg-gradient-to-r rounded-full mt-2 flex-shrink-0`}
														></div>
														{achievement}
													</li>
												)
											)}
										</ul>
									</div>

									{/* Technologies */}
									<div className="mb-6">
										<h5 className="text-slate-800 dark:text-white font-semibold mb-3 flex items-center gap-2 text-sm md:text-base heading-fix">
											<Code className="w-4 h-4" />
											Technologies
										</h5>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="px-2 md:px-3 py-1 bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-white/80 rounded-lg text-xs md:text-sm border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-colors"
													>
														{tech}
													</span>
												)
											)}
										</div>
									</div>

									{/* Impact */}
									<div className="flex items-center gap-2 text-slate-500 dark:text-white/60 text-sm">
										<Globe className="w-4 h-4" />
										<span className="font-medium">
											Impact:
										</span>
										<span>{project.impact}</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* CTA Section */}
				<motion.div
					className="text-center mt-16 md:mt-20 py-12 md:py-16"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 md:mb-6 heading-fix"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Interested in Collaborating?
					</motion.h2>
					<motion.p
						className="text-lg md:text-xl text-slate-600 dark:text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						I'm always open to discussing new projects, creative
						ideas, or opportunities to be part of your vision.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<a
							href="mailto:hamzaadil56@gmail.com"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
						>
							Let's Work Together
							<ExternalLink className="w-5 h-5" />
						</a>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
