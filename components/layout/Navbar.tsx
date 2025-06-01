"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/assets/logos/Hamza-logo.png";
import { usePagesContext } from "@/context/PagesContext";

const navLinks = [
	{ name: "Intro", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Projects", path: "/projects" },
	{ name: "Experience", path: "/experience" },
	{ name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);
	// const { handleActivePage } = usePagesContext();

	const handleLinkClick = (path: string, index: number, type: string) => {
		setActiveLink(path);
		// handleActivePage(index, type);
	};

	return (
		<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto">
			<div className="flex items-center bg-[#181818] rounded-full  py-2">
				{navLinks.map((link) => {
					const isActive = activeLink === link.path;
					return (
						<Link
							key={link.path}
							href={link.path}
							className="relative mx-2"
							onClick={() =>
								handleLinkClick(link.path, 0, link.path)
							}
						>
							<span className="relative flex items-center">
								{isActive && (
									<motion.span
										layoutId="active-pill"
										className="absolute inset-0 z-0 rounded-full bg-white"
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 30,
										}}
									/>
								)}
								<span
									className={`relative z-10 px-6 py-2 text-lg transition-colors duration-200 ${
										isActive
											? "text-black font-medium"
											: "text-white font-normal"
									}`}
									style={{ fontFamily: "inherit" }}
								>
									{link.name}
								</span>
								{/* {link.badge && (
									<span className="ml-2 flex items-center">
										<span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full bg-gradient-to-tr from-[#6f3cff] to-[#e14eca] shadow-md">
											{link.badge}
										</span>
									</span>
								)} */}
							</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
