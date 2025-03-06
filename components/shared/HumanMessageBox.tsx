import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import HamzaPic from "@/assets/images/hamza.jpeg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HumanMessageBox = ({ message }: { message: string }) => {
	return (
		<div className="flex items-start gap-3   ">
			{/* Chat Bubble with Discord-style pointer */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="relative bg-secondary-gray text-light-gray p-4 rounded-lg shadow-md max-w-xl text-left rounded-tr-none"
			>
				<div className="absolute top-0 left-[-10px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-main-gray border-b-[10px] border-b-transparent"></div>
				<p className="text-base mt-1">{message}</p>
			</motion.div>
			<Avatar>
				<AvatarFallback>You</AvatarFallback>
			</Avatar>
		</div>
	);
};

export default HumanMessageBox;
