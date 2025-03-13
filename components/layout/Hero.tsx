"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";
import HumanMessageBox from "../shared/HumanMessageBox";
import AIMessageBox from "../shared/AIMessageBox";
import { useChat } from "@ai-sdk/react";

const Hero = () => {

	const [message, setMessage] = useState("");

	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxSteps: 3,
	});

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
	}, [message]);

	return (
		<div className="flex flex-col items-center justify-center px-4 py-6  w-full">
			<h1 className="text-4xl w-full  text-center text-light-gray">
				Ask anything about me from my AI assistant!
			</h1>

			<div className="w-full max-w-3xl space-y-4 mt-6">
				{messages.map((msg, index) => (
					<div
						key={index}
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
					</div>
				))}
			</div>

			<motion.form
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				onSubmit={handleSubmit}
				className="w-full max-w-3xl mx-auto  bg-secondary-gray rounded-lg mt-6"
			>
				<div className="flex flex-row bg-secondary-gray p-4 rounded-lg scrollbar-hide  shadow-md overflow-hidden">
					<textarea
						ref={textareaRef}
						placeholder="Ask me anything..."
						value={input}
						onChange={handleInputChange}
						className="w-full min-h-[100px] bg-secondary-gray scrollbar-hide border-none outline-none resize-none text-light-gray "
					/>
					<button
						type="submit"
						className={`h-10 px-4 rounded-full flex items-center transition shadow-md opacity-90 justify-center gap-2 transition-colors transition-all bg-main-gray hover:opacity-100${
							message.trim()
								? "bg-main-gray text-light-gray hover:opacity-100 "
								: "bg-gray-200 text-gray-400 "
						}`}
					>
						<span>Send</span>
						<Send size={16} />
					</button>
				</div>
			</motion.form>
		</div>

	);
};

export default Hero;
