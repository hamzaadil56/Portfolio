"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play, Sparkles } from "lucide-react";
import Image from "next/image";

interface FeaturedProjectProps {
	project: {
		title: string;
		subtitle: string;
		description: string;
		image: string;
		video?: string;
		technologies: string[];
		link?: string;
		colors: {
			primary: string;
			secondary: string;
			accent: string;
		};
	};
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<motion.section
			className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			{/* Section Header */}
			<motion.div
				className="text-center mb-12 md:mb-16"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-4">
					<Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
					<span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
						Featured Project
					</span>
				</div>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 heading-fix">
					Latest Innovation
				</h2>
				<p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
					Showcasing my expertise in AI Engineering and building
					cutting-edge AI applications
				</p>
			</motion.div>

			{/* Project Card */}
			<motion.div
				className="group relative bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
				whileHover={{ y: -5 }}
			>
				<div className="grid lg:grid-cols-2 gap-0">
					{/* Video/Image Section */}
					<div className="relative overflow-hidden lg:order-1 h-64 md:h-80 lg:h-full min-h-[400px]">
						{showVideo && project.video ? (
							<div className="relative w-full h-full bg-black">
								<iframe
									src={project.video}
									title={project.title}
									className="w-full h-full"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									loading="lazy"
								/>
								<button
									onClick={() => setShowVideo(false)}
									className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
									aria-label="Close video"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						) : (
							<div className="relative w-full h-full">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-700"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
								{project.video && (
									<button
										onClick={() => setShowVideo(true)}
										className="absolute inset-0 flex items-center justify-center group/play"
										aria-label="Play video"
									>
										<div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 dark:bg-white/80 rounded-full flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform duration-300">
											<Play className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 ml-1" />
										</div>
									</button>
								)}
								<div className="absolute top-4 left-4">
									<span
										className={`px-3 py-1 bg-gradient-to-r ${project.colors.primary} text-white rounded-full text-sm font-medium shadow-lg`}
									>
										{project.subtitle}
									</span>
								</div>
							</div>
						)}
					</div>

					{/* Content Section */}
					<div className="p-6 md:p-8 lg:p-12 lg:order-2 flex flex-col justify-center">
						<div className="mb-4">
							<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2 heading-fix">
								{project.title}
							</h3>
							<p className="text-slate-600 dark:text-white/70 leading-relaxed text-base md:text-lg mb-6">
								{project.description}
							</p>
						</div>

						{/* Technologies */}
						<div className="mb-6">
							<h4 className="text-slate-800 dark:text-white font-semibold mb-3 text-sm md:text-base">
								Technologies Used
							</h4>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-white/80 rounded-lg text-xs md:text-sm border border-slate-300 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-400 transition-colors"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* CTA Button */}
						{project.link && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/25 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 group shadow-md"
							>
								<span className="text-white font-semibold">View Project</span>
								<ExternalLink className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
							</a>
						)}
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default FeaturedProject;

