/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
			{ protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
			{ protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
		],
	},
};

module.exports = nextConfig;
