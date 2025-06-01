"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Logo from "@/assets/logos/Hamza-logo.png";
import { usePagesContext } from "@/context/PagesContext";

const Navbar = () => {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);
	// const { handleActivePage } = usePagesContext();

	const handleLinkClick = (path: string, index: number, type: string) => {
		setActiveLink(path);
		// handleActivePage(index, type);
	};

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Skills", path: "/skills" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-[1000]">
			<div className="relative bg-black/40 backdrop-blur-lg rounded-full border border-white/20 shadow-lg">
				<div className="flex justify-around items-center h-16">
					{navLinks.map((link, index) => (
						<Link
							key={link.path}
							href={link.path}
							className="relative px-4 py-2 text-sm font-medium"
							onClick={() =>
								handleLinkClick(link.path, index, link.path)
							}
						>
							<span
								className={`transition-colors duration-200 ${
									activeLink === link.path
										? "text-white"
										: "text-gray-300 hover:text-white"
								}`}
							>
								{link.name}
							</span>
							{activeLink === link.path && (
								<motion.div
									layoutId="activeLink"
									className="absolute inset-0 bg-white/20 rounded-full -z-10"
									transition={{
										type: "spring",
										stiffness: 380,
										damping: 30,
									}}
								/>
							)}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
