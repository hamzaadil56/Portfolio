"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";
import HumanMessageBox from "../shared/HumanMessageBox";
import AIMessageBox from "../shared/AIMessageBox";

const Hero = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState<
		{ type: "human" | "ai"; text: string }[]
	>([
		{
			type: "ai",
			text: "👋 Hi there! I'm Hamza, what do you want to ask about me?",
		},
	]);
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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

	const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (message.trim()) {
			setMessages((prev) => [...prev, { type: "human", text: message }]);
			setMessage("");
			setTimeout(() => {
				setMessages((prev) => [
					...prev,
					{ type: "ai", text: "That's interesting! Tell me more." },
				]);
			}, 1000);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center px-4 py-12 w-full">
			<h1 className="text-4xl max-w-md text-center text-light-gray">
				Chat with me to discover more about myself!
			</h1>

			<div className="w-full max-w-xl space-y-4 mt-6">
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`flex w-full ${
							msg.type === "ai" ? "justify-start" : "justify-end"
						}`}
					>
						{msg.type === "ai" ? (
							<AIMessageBox message={msg.text} />
						) : (
							<HumanMessageBox message={msg.text} />
						)}
					</div>
				))}
			</div>

			<motion.form
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				onSubmit={handleSendMessage}
				className="w-full max-w-2xl bg-secondary-gray rounded-lg mt-6"
			>
				<div className="flex flex-row bg-secondary-gray p-4 rounded-lg scrollbar-hide  shadow-md overflow-hidden">
					<textarea
						ref={textareaRef}
						placeholder="Ask me anything..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="w-full min-h-[100px] bg-secondary-gray scrollbar-hide border-none outline-none resize-none text-light-gray "
					/>
					<button
						type="submit"
						disabled={!message.trim()}
						className={`h-10 px-4 rounded-full flex items-center transition shadow-md opacity-90 justify-center gap-2 transition-colors transition-all  ${
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
