export const profile = {
	name: "Hamza",
	monogram: "/profile.png",
	role: "Software Engineer",
	roleLong: "Software Engineer · Full-Stack · Frontend",
	location: "Karachi, Pakistan",
	timezone: "Asia/Karachi",
	availability: "Open to freelance, startup & senior roles",
	email: "hamzaadil56@gmail.com",
	emailPortfolio: "engineerhamza@hamzaadil.dev",
	phone: "+92-316-162-0162",
	resumeUrl: "/Muhammad_Hamza_Resume.pdf",
	domain: "hamzaadil.dev",
	tagline:
		"I ship production single-page apps and full-stack systems used by 500,000+ users.",
	summary:
		"Software Engineer with 3+ years shipping production single-page applications and full-stack systems to 500,000+ users. Expert in React.js, Next.js, TypeScript, and Node.js, with backend depth in ASP.NET Core, FastAPI, and microservices on AWS and Azure.",
	socials: [
		{
			label: "GitHub",
			href: "https://github.com/hamzaadil56",
			handle: "hamzaadil56",
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/muhammad-hamza-adil/",
			handle: "muhammad-hamza-adil",
		},
		{
			label: "Twitter",
			href: "https://twitter.com/hamza_chemE_dev",
			handle: "@hamza_chemE_dev",
		},
		{
			label: "YouTube",
			href: "https://www.youtube.com/@hamzaadil56",
			handle: "@hamzaadil56",
		},
	],
} as const;

export type Social = (typeof profile.socials)[number];
