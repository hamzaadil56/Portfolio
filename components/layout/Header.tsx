import React from "react";
import Image from "next/image";
import Logo from "@/assets/logos/Hamza-logo.png";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 shadow-sm  backdrop-blur-lg z-50">
			<div className="flex items-center">
				<p className="text-lg md:text-xl font-light text-gray-200">
					Exploring Digital Future.{" "}
					<span className="italic">Together</span>
				</p>
			</div>
			<div className="flex items-center">
				<Image
					src={Logo}
					alt="Logo"
					width={50}
					height={50}
					className="object-contain"
				/>
			</div>
		</header>
	);
};

export default Header;
