import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";

const AIMessageBox = ({ message }: { message: string }) => {
	return (
		<div className="flex items-start gap-3 w-full ">
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
				className="relative bg-secondary-gray text-light-gray p-4 rounded-lg shadow-md  text-left rounded-tl-none"
			>
				<div className="absolute top-0 left-[-10px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-main-gray border-b-[10px] border-b-transparent"></div>
				<p className="text-base mt-1 text-small ">{message}</p>
			</motion.div>
		</div>
	);
};

export default AIMessageBox;
