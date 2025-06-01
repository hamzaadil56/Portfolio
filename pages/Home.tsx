"use client";
import React from "react";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/widgets/PageTransition";

const Home = () => {
	return (
		<div className="bg-black text-white min-h-screen rounded-3xl">
			<Header />
			<Hero title="I transform ideas into" isHomePage={true} />
		</div>
	);
};

export default Home;
