"use client";

import Hero from "@/components/layout/Hero";
import React from "react";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/widgets/PageTransition";

const About = () => {
	return (
		<div className="bg-black w-[100vw] min-h-screen">
			<Header />
			<Hero
				title="Ask about me from my AI assistant"
				isHomePage={false}
			/>
		</div>
	);
};

export default About;
