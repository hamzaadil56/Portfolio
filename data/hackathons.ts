export type Hackathon = {
	id: string;
	event: string;
	organizer: string;
	date: string;
	placement?: string;
	award?: string;
	project: string;
	pitch: string;
	tech: string[];
	links: { label: string; href: string }[];
};

export const hackathons: Hackathon[] = [
	{
		id: "pec-national",
		event: "PEC National Hackathon",
		organizer: "Pakistan Engineering Council",
		date: "2025",
		placement: "5th place — National",
		project: "Personalised Tutor",
		pitch:
			"Led a 6-engineer team to build an LLM agent on agentic AI architecture using Python, LangChain, OpenAI API, and a Streamlit frontend. Competed against teams nationwide.",
		tech: ["Python", "LangChain", "OpenAI", "Streamlit", "Agentic AI"],
		links: [],
	},
	{
		id: "bwai-gdg",
		event: "BWAI Hackathon",
		organizer: "GDG Kolachi",
		date: "2024",
		placement: "Top 10",
		award: "\"Mentor\" title",
		project: "EQ Mentor",
		pitch:
			"A Generative AI mentoring assistant. Awarded the Mentor title at the event for an innovative AI solution.",
		tech: ["Gemini", "OpenAI API", "React.js", "Streamlit"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/hamzaadil56/2024_AI_Challenge--LazyDevs-",
			},
		],
	},
	{
		id: "lablab-ryh",
		event: "RYH Hackathon — Vultr Track",
		organizer: "lablab.ai",
		date: "2025",
		project: "HiredMind",
		pitch:
			"Architected an AI agentic application that automates the hiring process — job posting, candidate screening, interview scheduling, and evaluation — using OpenAI Agents SDK. Deployed on Vultr.",
		tech: ["OpenAI Agents SDK", "FastAPI", "Next.js", "Vultr", "Llama 3", "GROQ"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/hamzaadil56/RYH-Hackathon-Vultr-Track",
			},
		],
	},
	{
		id: "lablab-lokahi",
		event: "Lokahi Hackathon",
		organizer: "lablab.ai",
		date: "2024",
		award: "International recognition",
		project: "CareAI",
		pitch:
			"Healthcare administration & donation allocation system using LangChain + RAG. Received international recognition and appreciation from technical mentors.",
		tech: ["LangChain", "RAG", "FastAPI", "React.js", "Vector DB", "GROQ"],
		links: [
			{ label: "Live", href: "https://care-ai-eight.vercel.app/" },
		],
	},
	// ADD_NEXT_HACKATHON_HERE:
	// {
	// 	id: "your-id",
	// 	event: "...",
	// 	organizer: "...",
	// 	date: "YYYY",
	// 	placement: "...",
	// 	award: "...",
	// 	project: "...",
	// 	pitch: "...",
	// 	tech: ["...", "..."],
	// 	links: [{ label: "GitHub", href: "..." }],
	// },
];
