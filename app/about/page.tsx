"use client";

import Hero from "@/components/layout/Hero";
import AnimatingPagesWrapper from "@/components/layout/AnimatingPagesWrapper";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { usePagesContext } from "@/context/PagesContext";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function Page() {
	const pages = [<Home />, <About />];
	const { isPageAnimation, handlePageAnimation } = usePagesContext();

	return (
		<>
			{/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
			{/* <AnimatingPagesWrapper pages={pages} /> */}
			{isPageAnimation ? null : <About />}
		</>
	);
}
