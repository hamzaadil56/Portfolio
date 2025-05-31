"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";
import HumanMessageBox from "../shared/HumanMessageBox";
import AIMessageBox from "../shared/AIMessageBox";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";

interface HeroProps {
	title: string;
	isHomePage?: boolean;
}

const Hero = ({ title, isHomePage = false }: HeroProps) => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxSteps: 3,
	});
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const changingWords = [
		"Conversions",
		"Insights",
		"Websites",
		"Applications",
	];

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${Math.max(
				50,
				textareaRef.current.scrollHeight
			)}px`;
		}
	};

	useEffect(() => {
		adjustTextareaHeight();
	}, [input]);

	useEffect(() => {
		if (isHomePage) {
			const interval = setInterval(() => {
				setCurrentWordIndex(
					(prev) => (prev + 1) % changingWords.length
				);
			}, 2000); // Change word every 2 seconds

			return () => clearInterval(interval);
		}
	}, [isHomePage]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
		}
	};

	return (
		<div className="h-screen w-full flex items-center">
			<div className="container mx-auto px-4">
				<div className="max-w-2xl">
					{isHomePage ? (
						<div className="space-y-2">
							<h1 className="text-4xl md:text-5xl font-bold text-light-gray">
								We transform ideas into
							</h1>
							<div className="h-12">
								<AnimatePresence mode="wait">
									<motion.h2
										key={currentWordIndex}
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -20, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="text-4xl md:text-5xl font-bold text-light-gray"
									>
										{changingWords[currentWordIndex]}
									</motion.h2>
								</AnimatePresence>
							</div>
						</div>
					) : (
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-4xl md:text-5xl font-bold text-light-gray"
						>
							{title}
						</motion.h1>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero;
