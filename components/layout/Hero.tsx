"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";

const Hero = () => {
	const [message, setMessage] = useState("");
	const textareaRef = useRef(null);

	const adjustTextareaHeight = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = "auto";
			textarea.style.height = `${Math.max(120, textarea.scrollHeight)}px`;
		}
	};

	useEffect(() => {
		adjustTextareaHeight();
	}, [message]);

	const handleSendMessage = (e) => {
		e.preventDefault();
		if (message.trim()) {
			console.log("Message sent:", message);
			setMessage("");
		}
	};

	return (
		<div className="flex-1 flex gap-10 flex-col items-center justify-center px-4 py-12">
			<h1 className="text-4xl max-w-md text-center mb-20  text-light-gray">
				Chat with me to discover more about myself!
			</h1>
			<div className="flex items-start gap-3 w-full max-w-xl">
				<Image
					width={40}
					height={40}
					src={HamzaPic}
					alt="profile-pic"
					className="rounded-full"
				/>

				{/* Chat Bubble with Discord-style pointer */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative bg-secondary-gray text-light-gray p-4 rounded-lg shadow-md max-w-xl text-left rounded-tl-none"
				>
					<div className="absolute top-0 left-[-10px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-main-gray border-b-[10px] border-b-transparent"></div>
					<p className="text-sm font-semibold">Hamza</p>
					<p className="text-base mt-1">
						👋 Hi there! I'm Hamza, what do you want to ask about
						me?
					</p>
				</motion.div>
			</div>

			{/* Message Input */}
			<motion.form
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				onSubmit={handleSendMessage}
				className="w-full max-w-2xl bg-secondary-gray rounded-lg"
			>
				<div className="flex flex-row bg-secondary-gray rounded-lg shadow-md overflow-hidden">
					<textarea
						ref={textareaRef}
						placeholder="Ask me anything..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="w-full min-h-[120px] p-4 bg-secondary-gray border-none outline-none resize-none text-light-gray overflow-hidden"
					/>
					<div className="px-4 py-3 bg-secondary-gray border-t border-line-gray flex justify-end">
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
				</div>
			</motion.form>
		</div>
	);
};

export default Hero;
