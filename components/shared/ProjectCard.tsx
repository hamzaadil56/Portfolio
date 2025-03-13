"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Project } from "./Project";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }: Project) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className="relative flex flex-col justify-between rounded bg-secondary-gray overflow-hidden shadow-lg cursor-pointer"
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			initial={{ borderRadius: "0.25rem" }}
			animate={{ borderRadius: "0.25rem" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<Link
				target="_blank"
				href={project.websiteURL}
				className="shrink-0"
			>
				<Image
					className="w-full shrink-0"
					src={project.image}
					width={500}
					height={500}
					alt="project"
				/>
			</Link>
			<div className="flex-grow justify-between flex flex-col overflow-hidden">
				<div className="md:px-6 py-4 px-2">
					<h1 className="text-base font-bold md:text-xl text-gray-200 mb-2">
						{project.title}
					</h1>

					<motion.div
						className="overflow-hidden"
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: isHovered ? "auto" : 0,
							opacity: isHovered ? 1 : 0,
							marginBottom: isHovered ? "0.5rem" : 0,
						}}
						transition={{
							height: { duration: 0.3, ease: "easeOut" },
							opacity: {
								duration: 0.2,
								delay: isHovered ? 0.1 : 0,
							},
						}}
					>
						<div className="text-gray-400 md:text-base text-sm">
							{project.description}
						</div>
					</motion.div>
				</div>

				<AnimatePresence>
					{isHovered && (
						<motion.div
							className="md:px-6 pb-4 px-2 mt-auto mb-0 ml-0 mr-0"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{
								height: { duration: 0.3, ease: "easeOut" },
								opacity: { duration: 0.2 },
							}}
						>
							{project.technologies.map((technology, index) => (
								<span
									key={index}
									className="inline-block bg-gray-900 rounded-full px-3 py-1 text-xs md:text-sm font-light text-teal-400 mr-2 mb-2"
								>
									{technology}
								</span>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Visual indicator for hover */}
			<motion.div
				className="absolute bottom-0 left-0 right-0 h-1 bg-teal-400"
				initial={{ scaleX: 0 }}
				animate={{
					scaleX: isHovered ? 1 : 0,
				}}
				transition={{ duration: 0.3, ease: "easeOut" }}
				style={{ transformOrigin: "left" }}
			/>
		</motion.div>
	);
};

export default ProjectCard;
