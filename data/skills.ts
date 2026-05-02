export type SkillGroup = {
	id: string;
	label: string;
	hint: string;
	items: string[];
	featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
	{
		id: "frontend",
		label: "Frontend",
		hint: "Where I spend most of my craft",
		items: [
			"React.js",
			"Next.js",
			"TypeScript",
			"Redux",
			"Tailwind CSS",
			"Framer Motion",
			"GSAP",
			"Responsive SPAs",
			"Accessibility",
		],
		featured: true,
	},
	{
		id: "backend",
		label: "Backend & APIs",
		hint: "Production systems, not toys",
		items: [
			"Node.js",
			"Express.js",
			"ASP.NET Core",
			"FastAPI",
			"Python",
			"C#",
			"REST API Design",
			"Microservices",
			"MVVM",
			"Blazor Server",
		],
	},
	{
		id: "databases",
		label: "Databases",
		hint: "Relational & NoSQL",
		items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"],
	},
	{
		id: "cloud",
		label: "Cloud & DevOps",
		hint: "Ship reliably, observe everything",
		items: [
			"Azure DevOps CI/CD",
			"Azure Service Bus",
			"AWS Amplify",
			"AWS Lambda",
			"AWS S3",
			"Docker",
			"Vite",
			"Webpack",
			"Git",
		],
	},
	{
		id: "genai",
		label: "Generative AI",
		hint: "Production-grade LLM systems",
		items: [
			"OpenAI API",
			"OpenAI Agents SDK",
			"LangChain",
			"RAG",
			"Vector Databases",
			"Streamlit",
		],
	},
];
