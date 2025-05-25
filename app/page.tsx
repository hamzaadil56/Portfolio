"use client";

import Background from "@/components/layout/Background";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import ReorderingDivs from "@/components/layout/ReorderingDivs";

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll();
	const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	useEffect(() => {
		let isScrolling = false;
		let currentSection = 0;
		const totalSections = 5;

		const scrollToSection = (sectionIndex: number) => {
			if (containerRef.current) {
				const sectionHeight = window.innerHeight;
				containerRef.current.scrollTo({
					top: sectionIndex * sectionHeight,
					behavior: "smooth"
				});
			}
		};

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();
			
			if (isScrolling) return;
			
			const direction = e.deltaY > 0 ? 1 : -1;
			const nextSection = Math.max(0, Math.min(currentSection + direction, totalSections - 1));
			
			if (nextSection !== currentSection) {
				isScrolling = true;
				currentSection = nextSection;
				scrollToSection(nextSection);

				setTimeout(() => {
					isScrolling = false;
				}, 1000);
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault();
				const direction = e.key === "ArrowDown" ? 1 : -1;
				const nextSection = Math.max(0, Math.min(currentSection + direction, totalSections - 1));
				
				if (nextSection !== currentSection) {
					currentSection = nextSection;
					scrollToSection(nextSection);
				}
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("wheel", handleWheel, { passive: false });
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			if (container) {
				container.removeEventListener("wheel", handleWheel);
				window.removeEventListener("keydown", handleKeyDown);
			}
		};
	}, []);

	return (
		<main className="relative w-full min-h-screen overflow-hidden">
			{/* <Background /> */}
			{/* <div
				ref={containerRef}
				className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth"
			>
				<section className="h-screen w-full snap-start">
					<Hero />
				</section>
				
				<section className="h-screen w-full snap-start">
					<About />
				</section>
				
				<section className="min-h-screen h-full w-full snap-start">
					<Projects />
				</section>
				
				<section className="h-screen w-full snap-start">
					<Skills />
				</section>
				
				<section className="h-screen w-full snap-start">
					<Contact />
				</section>
			</div> */}
			{/* <Footer /> */}
			<ReorderingDivs />

		</main>
	);
}
