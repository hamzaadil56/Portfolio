"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";
import HumanMessageBox from "../shared/HumanMessageBox";
import AIMessageBox from "../shared/AIMessageBox";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const Hero = () => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxSteps: 3,
	});
	const { ref, motionProps } = useScrollAnimation();

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

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
		}
	};

	return (
		<motion.div
			ref={ref}
			{...motionProps}
			className="flex flex-col items-center justify-center px-4 py-6 w-full h-screen"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-4xl w-full"
			>
				<h1 className="text-5xl font-bold text-center text-light-gray mb-8">
					Ask anything about me from my AI assistant!
				</h1>

				<div className="w-full space-y-4 mt-6">
					{messages.map((msg, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: msg.role === "assistant" ? -20 : 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className={`flex w-full ${
								msg.role === "assistant"
									? "justify-start"
									: "justify-end"
							}`}
						>
							{msg.role === "assistant" ? (
								<AIMessageBox
									message={msg.content || "Thinking..."}
								/>
							) : (
								<HumanMessageBox
									message={msg.content || "Thinking.."}
								/>
							)}
						</motion.div>
					))}
				</div>

				<motion.form
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
					onSubmit={handleSubmit}
					className="w-full mx-auto bg-secondary-gray rounded-lg mt-6"
				>
					<div className="flex flex-row bg-secondary-gray p-4 rounded-lg scrollbar-hide shadow-md overflow-hidden">
						<textarea
							ref={textareaRef}
							placeholder="Ask me anything..."
							value={input}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							className="w-full min-h-[100px] bg-secondary-gray scrollbar-hide border-none outline-none resize-none text-light-gray"
						/>
						<Button type="submit">
							Send
							<Send size={16} />
						</Button>
					</div>
				</motion.form>
			</motion.div>
		</motion.div>
	);
};

export default Hero;
