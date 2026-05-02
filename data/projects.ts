import type { StaticImageData } from "next/image";
import GovernorImg from "@/assets/images/governor-sindh.png";
import DreamMakerImg from "@/assets/images/dreammker.png";

export type Project = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	image: StaticImageData | string;
	video?: string;
	technologies: string[];
	achievements: string[];
	category: string;
	year: string;
	team: string;
	status: "Production" | "Live" | "Prototype" | "Hackathon";
	impact: string;
	link?: string;
	repo?: string;
	featured?: boolean;
};

// Subset of resume + data.ts. Order = order on home page.
export const projects: Project[] = [
	{
		id: "yourteacher",
		title: "YourTeacher",
		subtitle: "Autonomous agentic AI tutor that adapts to your learning style",
		description:
			"An autonomous agentic AI system for personalised learning. Students can learn anything in their own style, and the agent adapts to their cognitive ability — built with the OpenAI Agents SDK, RAG, and a vector store over reference material.",
		image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
		video: "https://www.youtube.com/embed/4urXIeZKRI0?rel=0&modestbranding=1",
		technologies: [
			"OpenAI Agents SDK",
			"Python",
			"Streamlit",
			"RAG",
			"LangChain",
			"Vector DB",
		],
		achievements: [
			"Autonomous agentic system that adapts to individual learning styles.",
			"Personalised algorithms that adjust to learner cognitive ability.",
			"Production-ready chat surface with retrieval-augmented context.",
		],
		category: "AI / EdTech",
		year: "2025",
		team: "Solo",
		status: "Live",
		impact: "Adaptive personalised education",
		link: "https://yourteacher.streamlit.app/",
		featured: true,
	},
	{
		id: "mahaana",
		title: "Mahaana",
		subtitle: "Pakistan's first digital asset management company (YC W22)",
		description:
			"Architecting customer & corporate SPAs for Mahaana — pension onboarding, portfolio dashboards, and corporate admin portals over ASP.NET Core microservices and Azure Service Bus.",
		image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg",
		technologies: [
			"React.js",
			"TypeScript",
			"Redux",
			"Tailwind CSS",
			"ASP.NET Core",
			"Azure Service Bus",
		],
		achievements: [
			"+70% pension onboarding throughput for 15,000+ users.",
			"−40% release cycle time via AI-assisted dev + Azure DevOps CI/CD hardening.",
			"Async event-driven inter-service communication.",
		],
		category: "Fintech",
		year: "2025",
		team: "Engineering team",
		status: "Production",
		impact: "Serving 15,000+ pension users",
		link: "https://www.mahaana.com/",
		featured: true,
	},
	{
		id: "dreamstream",
		title: "DreamStream",
		subtitle: "In-flight entertainment OTT platform on AWS",
		description:
			"Designed an in-flight entertainment platform with content management and high-performance cloud infrastructure. Selected by PIA via public tendering for portable IFE devices on A-320 and B-777 aircraft.",
		image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
		technologies: [
			"AWS Amplify",
			".NET Core",
			"AWS Lambda",
			"AWS S3",
			"OneDrive API",
			"React.js",
		],
		achievements: [
			"−60% OneDrive→S3 transfer latency via async I/O + S3 multipart upload.",
			"CMS for content providers to deploy on the DreamStream platform.",
			"Selected by PIA for IFE deployment on commercial aircraft.",
		],
		category: "Media & Entertainment",
		year: "2024",
		team: "4 engineers",
		status: "Production",
		impact: "Processing 10TB+ of content",
		link: "https://cms.dreamstream.aero",
		featured: true,
	},
	{
		id: "automily",
		title: "Automily",
		subtitle: "Generative AI software-quality automation platform",
		description:
			"Architected an AI-powered platform that automates QA workflows using OpenAI's LLMs and a microservices architecture. Drove a 50% reduction in manual test-writing effort.",
		image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
		technologies: [
			"FastAPI",
			"Python",
			"OpenAI",
			"LangChain",
			".NET Core",
			"MongoDB",
		],
		achievements: [
			"−50% manual test-writing effort via LLM-driven story-to-test generation.",
			"Vector databases for efficient AI model integration.",
			"Scalable microservices delivered under a Technical Lead.",
		],
		category: "AI / Quality",
		year: "2024",
		team: "2 engineers",
		status: "Production",
		impact: "Automated QA across 50+ projects",
		featured: true,
	},
	{
		id: "governor-sindh",
		title: "Governor Sindh Initiative",
		subtitle: "Government education platform — 500,000+ users",
		description:
			"Government platform for educational initiatives. Handled 500,000+ student registrations with Next.js 13, PostgreSQL, Redis caching, and a hardened Nginx + Docker deployment.",
		image: GovernorImg,
		technologies: [
			"Next.js 13",
			"PostgreSQL",
			"Node.js",
			"Redis",
			"Docker",
			"Nginx",
		],
		achievements: [
			"500,000+ student registrations.",
			"Robust caching strategy with Redis for high-concurrency endpoints.",
			"Optimised for high concurrency and horizontal scalability.",
		],
		category: "EdTech / Government",
		year: "2023",
		team: "6 engineers",
		status: "Live",
		impact: "500,000+ registered users",
		link: "https://www.governorsindh.com/",
		featured: true,
	},
	{
		id: "careai",
		title: "CareAI",
		subtitle: "Intelligent healthcare administration & donation allocation",
		description:
			"Healthcare administration system that uses AI to ensure fairness, transparency, and efficiency in healthcare access for financially disadvantaged patients. Recognised internationally at the Lokahi hackathon (lablab.ai).",
		image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
		technologies: ["LangChain", "RAG", "FastAPI", "React.js", "Vector DB", "GROQ"],
		achievements: [
			"AI-driven donation allocation prioritising urgent cases fairly.",
			"International recognition from Lokahi (lablab.ai) technical mentors.",
			"Vercel + Render production deployment.",
		],
		category: "AI / Healthcare",
		year: "2024",
		team: "2 engineers",
		status: "Prototype",
		impact: "International recognition",
		link: "https://care-ai-eight.vercel.app/",
		featured: true,
	},
	// --- non-featured / archive ---
	{
		id: "hiredmind",
		title: "HiredMind",
		subtitle: "AI agent that automates the hiring process",
		description:
			"Agentic application that streamlines job posting, candidate screening, interview scheduling, and evaluation using OpenAI Agents SDK. Deployed on Vultr for the lablab.ai RYH hackathon.",
		image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
		technologies: ["OpenAI Agents SDK", "RAG", "FastAPI", "Next.js", "Llama 3", "GROQ"],
		achievements: [
			"End-to-end hiring automation built on agentic workflows.",
			"Candidate screening tuned for fairness and prioritisation.",
			"Deployed to Vultr cloud platform.",
		],
		category: "AI",
		year: "2025",
		team: "6 engineers",
		status: "Hackathon",
		impact: "lablab.ai RYH submission",
		link: "https://github.com/hamzaadil56/RYH-Hackathon-Vultr-Track",
	},
	{
		id: "dreammaker",
		title: "DreamMaker",
		subtitle: "E-learning platform with integrated payments",
		description:
			"Comprehensive e-learning platform with course management, advanced MongoDB aggregations, and PayPal integration for paid courses.",
		image: DreamMakerImg,
		technologies: ["MongoDB", "Node.js", "PayPal API", "React.js", "Express.js", "JWT"],
		achievements: [
			"PayPal payment integration for paid courses.",
			"−70% query time via aggregation-pipeline optimisation.",
			"Responsive course-management dashboard.",
		],
		category: "EdTech",
		year: "2024",
		team: "3 engineers",
		status: "Live",
		impact: "500+ students enrolled",
		link: "https://platform.dreammakerr.com",
	},
];

export const featuredProjects = projects.filter((p) => p.featured);
