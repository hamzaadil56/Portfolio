export type Experience = {
	id: string;
	company: string;
	companyTag?: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	current?: boolean;
	bullets: string[];
};

export const experience: Experience[] = [
	{
		id: "mahaana",
		company: "Mahaana Wealth",
		companyTag: "Y Combinator W22",
		role: "Software Engineer (Full Stack)",
		location: "Karachi, Pakistan",
		startDate: "Jan 2025",
		endDate: "Apr 2026",
		current: true,
		bullets: [
			"Architected React/TypeScript/Redux SPAs for 15,000+ pension users — onboarding throughput up 70%.",
			"Cut release cycle 40% by hardening Azure DevOps CI/CD; coordinated microservices via Azure Service Bus.",
		],
	},
	{
		id: "mparsec",
		company: "MegaParsec (mParsec)",
		companyTag: "Software consultancy",
		role: "Software Engineer (Full Stack)",
		location: "Karachi, Pakistan",
		startDate: "Sep 2023",
		endDate: "Jan 2025",
		bullets: [
			"Led Automily — GenAI test-authoring platform (FastAPI + OpenAI + React) — cut manual QA effort by 50%.",
			"Reduced OneDrive→S3 file-transfer latency 60% on DreamStream OTT via .NET Core Lambda + S3 multipart upload.",
		],
	},
	{
		id: "panacloud",
		company: "Panacloud Pvt. Ltd.",
		companyTag: "Cloud-native consultancy",
		role: "Full Stack Developer Intern",
		location: "Karachi, Pakistan",
		startDate: "Apr 2023",
		endDate: "Jun 2023",
		bullets: [
			"Delivered Next.js SPA + PostgreSQL API that onboarded 500,000+ students for the Governor Sindh Initiative.",
		],
	},
	{
		id: "freelance",
		company: "Freelance",
		companyTag: "Independent consulting",
		role: "Full Stack Developer (MERN)",
		location: "Remote",
		startDate: "Aug 2022",
		endDate: "Apr 2023",
		bullets: [
			"Delivered 5+ MERN-stack products for international clients — 99.9% satisfaction across all engagements.",
		],
	},
];

export type Education = {
	id: string;
	school: string;
	credential: string;
	field: string;
	location: string;
	startDate: string;
	endDate: string;
	note?: string;
};

export const education: Education[] = [
	{
		id: "ned",
		school: "NED University of Engineering & Technology",
		credential: "Bachelor of Engineering",
		field: "Chemical Engineering",
		location: "Karachi, Pakistan",
		startDate: "Sep 2019",
		endDate: "Aug 2023",
		note: "CGPA 3.20 / 4.0",
	},
];
