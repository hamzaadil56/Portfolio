"use client";

import { motion } from "framer-motion";
import {
	ArrowLeft,
	ExternalLink,
	Github,
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
	optimizedStaggerContainer,
	optimizedViewport,
} from "@/components/ui/optimized-motion";

export default function Projects() {
	const projects = [
		{
			title: "Mahaana",
			subtitle:
				"Pakistan's First Digital Asset Management Company (YC W22)",
			description:
				"Led the frontend development of a comprehensive customer portal for Pakistan's pioneering digital asset management platform, focusing on performance optimization and scalable architecture.",
			image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg",
			technologies: [
				"React.js",
				"Redux",
				"TypeScript",
				"Tailwind CSS",
				"REST APIs",
				"Jest",
			],
			achievements: [
				"Built a user-friendly interface using React.js and Redux with pixel-perfect implementation",
				"Implemented code splitting and image optimization to enhance performance and load times",
				"Followed SDLC patterns to ensure high-quality delivery",
				"Collaborated closely with design team for seamless UI/UX implementation",
			],
			category: "Fintech",
			year: "2025",
			team: "5 developers",
			status: "Production",
			impact: "Serving thousands of users",
			colors: {
				primary: "from-blue-600 to-purple-600",
				secondary: "border-blue-400/30",
				accent: "text-blue-500 dark:text-blue-400",
			},
		},
		{
			title: "Automily",
			subtitle: "Generative AI Software Quality Automation Tool",
			description:
				"Architected and developed an innovative AI-powered platform that automates software quality assurance workflows using OpenAI's Large Language Models and modern microservices architecture.",
			image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
			technologies: [
				"FastAPI",
				"Python",
				"OpenAI",
				"LangChain",
				".NET Core",
				"Docker",
				"PostgreSQL",
			],
			achievements: [
				"Worked under Technical Lead to deliver scalable microservices architectures",
				"Leveraged OpenAI's Large Language Models for automated user story testing",
				"Implemented vector databases for efficient AI model integration",
				"Drove 40% efficiency improvement in software release cycles",
			],
			category: "AI/ML",
			year: "2024",
			team: "3 developers",
			status: "Production",
			impact: "Automated testing for 50+ projects",
			colors: {
				primary: "from-green-600 to-teal-600",
				secondary: "border-green-400/30",
				accent: "text-green-500 dark:text-green-400",
			},
		},
		{
			title: "DreamStream",
			subtitle: "OTT Platform for Entertainment Content",
			description:
				"Designed and implemented a comprehensive Over-The-Top (OTT) streaming platform with advanced content management capabilities and high-performance cloud infrastructure.",
			image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
			technologies: [
				"AWS Amplify",
				".NET Core",
				"Lambda",
				"S3",
				"OneDrive API",
				"React.js",
			],
			achievements: [
				"Architected Content Management System (CMS) using AWS Amplify",
				"Developed high-performance Lambda functions for file transfers",
				"Achieved 60% transfer time reduction between OneDrive and AWS S3",
				"Improved traveler entertainment and ancillary services",
			],
			category: "Cloud/Media",
			year: "2024",
			team: "4 developers",
			status: "Production",
			impact: "Processing 10TB+ of content",
			colors: {
				primary: "from-purple-600 to-pink-600",
				secondary: "border-purple-400/30",
				accent: "text-purple-500 dark:text-purple-400",
			},
		},
		{
			title: "DreamMaker",
			subtitle: "Educational Platform",
			description:
				"Built a comprehensive e-learning platform with advanced database optimization and integrated payment systems for seamless course purchasing experience.",
			image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
			technologies: [
				"MongoDB",
				"Node.js",
				"PayPal API",
				"React.js",
				"Express.js",
				"JWT",
			],
			achievements: [
				"Implemented advanced database aggregation techniques using MongoDB",
				"Integrated PayPal payment method for purchasing paid courses",
				"Optimized database queries for 70% faster content delivery",
				"Built responsive course management dashboard",
			],
			category: "EdTech",
			year: "2024",
			team: "3 developers",
			status: "Live",
			impact: "500+ students enrolled",
			colors: {
				primary: "from-orange-600 to-red-600",
				secondary: "border-orange-400/30",
				accent: "text-orange-500 dark:text-orange-400",
			},
		},
		{
			title: "Governor Sindh Initiative Website",
			subtitle: "Government Education Platform",
			description:
				"Developed a large-scale government platform for educational initiatives, successfully handling massive user registration and course management for the Governor Sindh Initiative.",
			image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
			technologies: [
				"Next.js 13",
				"PostgreSQL",
				"Node.js",
				"Redis",
				"Docker",
				"Nginx",
			],
			achievements: [
				"Established backend system using Next.js 13 framework and PostgreSQL",
				"Successfully handled registration of 500,000+ students",
				"Implemented robust caching strategies with Redis",
				"Optimized for high concurrency and scalability",
			],
			category: "Government/EdTech",
			year: "2023",
			team: "6 developers",
			status: "Live",
			impact: "500,000+ registered users",
			colors: {
				primary: "from-cyan-600 to-blue-600",
				secondary: "border-cyan-400/30",
				accent: "text-cyan-500 dark:text-cyan-400",
			},
		},
		{
			title: "EQ Mentor",
			subtitle: "AI-Powered Personalized Mentor (Hackathon Winner)",
			description:
				"Developed an innovative Generative AI-powered personalized mentoring platform that secured a top 10 position at the BWAI hackathon organized by GDGKolachi.",
			image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
			technologies: [
				"OpenAI",
				"Python",
				"FastAPI",
				"React.js",
				"TensorFlow",
				"Vector DB",
			],
			achievements: [
				"Secured top 10 position in BWAI hackathon by GDGKolachi",
				"Earned the 'Mentor' title for innovative AI solution",
				"Implemented personalized learning algorithms",
				"Created intuitive chat-based mentoring interface",
			],
			category: "AI/ML",
			year: "2024",
			team: "2 developers",
			status: "Prototype",
			impact: "Hackathon winner",
			colors: {
				primary: "from-yellow-600 to-orange-600",
				secondary: "border-yellow-400/30",
				accent: "text-yellow-500 dark:text-yellow-400",
			},
		},
	];

	const fadeInUp = {
		initial: { opacity: 0, y: 60 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.8, ease: "easeOut" },
	};

	const staggerContainer = {
		animate: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

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
										<div
											className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${project.colors.accent} hover:bg-white/20 transition-colors cursor-pointer`}
										>
											<ExternalLink className="w-5 h-5" />
										</div>
										<div
											className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${project.colors.accent} hover:bg-white/20 transition-colors cursor-pointer`}
										>
											<Github className="w-5 h-5" />
										</div>
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
