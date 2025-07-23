import ProjectImage from "@/assets/images/manage-landing-page.png";
import MERNImage from "@/assets/images/mern-stack-app.png";
import EcommerceImage from "@/assets/images/React-Redux.png";
import FormGenerator from "@/assets/images/form-generator.png";
import GulzarFashion from "@/assets/images/gulzar-fashion.png";
import Governor from "@/assets/images/governor-sindh.png";
import QuizApp from "@/assets/images/quiz-app.png";

import ReactLogo from "@/assets/logos/reactjs.png";
import nextLogo from "@/assets/logos/nextjs.png";
import nodeLogo from "@/assets/logos/nodejs.png";
import typescriptLogo from "@/assets/logos/typescript.png";
import reduxLogo from "@/assets/logos/redux.png";
import firebaseLogo from "@/assets/logos/firebase.png";
import gitLogo from "@/assets/logos/git.png";
import tailwindLogo from "@/assets/logos/tailwindcss.png";
import GithubIcon from "@/assets/icons/github.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import PanaverseDAO from "@/assets/images/panaverse-dao.png";

import mongoLogo from "@/assets/logos/mongoDB.png";
import expressLogo from "@/assets/logos/expressjs.png";
import postgreLogo from "@/assets/logos/postgreSQL.png";
import bootstrapLogo from "@/assets/logos/bootstrap.png";
import sanityLogo from "@/assets/logos/sanity.png";
import DreamMakerImage from "@/assets/images/dreammker.png";

export const projects = [
	{
		title: "Mahaana",
		subtitle: "Pakistan's First Digital Asset Management Company (YC W22)",
		description:
			"Led the frontend development of a comprehensive customer portal for Pakistan's pioneering digital asset management platform, focusing on performance optimization and scalable architecture.",
		image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg",
		technologies: [
			"React.js",
			"Redux",
			"TypeScript",
			"Tailwind CSS",
			"REST APIs",
			"Jest",
		],
		achievements: [
			"Built a user-friendly interface using React.js and Redux with pixel-perfect implementation",
			"Implemented code splitting and image optimization to enhance performance and load times",
			"Followed SDLC patterns to ensure high-quality delivery",
			"Collaborated closely with design team for seamless UI/UX implementation",
		],
		category: "Fintech",
		year: "2025",
		team: "5 developers",
		status: "Production",
		impact: "Serving thousands of users",
		colors: {
			primary: "from-blue-600 to-purple-600",
			secondary: "border-blue-400/30",
			accent: "text-blue-500 dark:text-blue-400",
		},
		link: "https://www.mahaana.com/",
	},
	{
		title: "Automily",
		subtitle: "Generative AI Software Quality Automation Tool",
		description:
			"Architected and developed an innovative AI-powered platform that automates software quality assurance workflows using OpenAI's Large Language Models and modern microservices architecture.",
		image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
		technologies: [
			"FastAPI",
			"Python",
			"OpenAI",
			"LangChain",
			".NET Core",
			"Docker",
			"PostgreSQL",
		],
		achievements: [
			"Worked under Technical Lead to deliver scalable microservices architectures",
			"Leveraged OpenAI's Large Language Models for automated user story testing",
			"Implemented vector databases for efficient AI model integration",
			"Drove 40% efficiency improvement in software release cycles",
		],
		category: "AI/ML",
		year: "2024",
		team: "3 developers",
		status: "Production",
		impact: "Automated testing for 50+ projects",
		colors: {
			primary: "from-green-600 to-teal-600",
			secondary: "border-green-400/30",
			accent: "text-green-500 dark:text-green-400",
		},
	},
	{
		title: "DreamStream",
		subtitle: "OTT Platform for Entertainment Content",
		description:
			"Designed and implemented a comprehensive Over-The-Top (OTT) streaming platform with advanced content management capabilities and high-performance cloud infrastructure.",
		image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
		technologies: [
			"AWS Amplify",
			".NET Core",
			"Lambda",
			"S3",
			"OneDrive API",
			"React.js",
		],
		achievements: [
			"Architected Content Management System (CMS) using AWS Amplify",
			"Developed high-performance Lambda functions for file transfers",
			"Achieved 60% transfer time reduction between OneDrive and AWS S3",
			"Improved traveler entertainment and ancillary services",
		],
		category: "Cloud/Media",
		year: "2024",
		team: "4 developers",
		status: "Production",
		impact: "Processing 10TB+ of content",
		colors: {
			primary: "from-purple-600 to-pink-600",
			secondary: "border-purple-400/30",
			accent: "text-purple-500 dark:text-purple-400",
		},
		link: "https://cms.dreamstream.com",
	},
	{
		title: "DreamMaker",
		subtitle: "Educational Platform",
		description:
			"Built a comprehensive e-learning platform with advanced database optimization and integrated payment systems for seamless course purchasing experience.",
		image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
		technologies: [
			"MongoDB",
			"Node.js",
			"PayPal API",
			"React.js",
			"Express.js",
			"JWT",
		],
		achievements: [
			"Implemented advanced database aggregation techniques using MongoDB",
			"Integrated PayPal payment method for purchasing paid courses",
			"Optimized database queries for 70% faster content delivery",
			"Built responsive course management dashboard",
		],
		category: "EdTech",
		year: "2024",
		team: "3 developers",
		status: "Live",
		impact: "500+ students enrolled",
		colors: {
			primary: "from-orange-600 to-red-600",
			secondary: "border-orange-400/30",
			accent: "text-orange-500 dark:text-orange-400",
		},
		link: "https://platform.dreammakerr.com",
	},
	{
		title: "Governor Sindh Initiative Website",
		subtitle: "Government Education Platform",
		description:
			"Developed a large-scale government platform for educational initiatives, successfully handling massive user registration and course management for the Governor Sindh Initiative.",
		image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
		technologies: [
			"Next.js 13",
			"PostgreSQL",
			"Node.js",
			"Redis",
			"Docker",
			"Nginx",
		],
		achievements: [
			"Established backend system using Next.js 13 framework and PostgreSQL",
			"Successfully handled registration of 500,000+ students",
			"Implemented robust caching strategies with Redis",
			"Optimized for high concurrency and scalability",
		],
		category: "Government/EdTech",
		year: "2023",
		team: "6 developers",
		status: "Live",
		impact: "500,000+ registered users",
		colors: {
			primary: "from-cyan-600 to-blue-600",
			secondary: "border-cyan-400/30",
			accent: "text-cyan-500 dark:text-cyan-400",
		},
		link: "https://www.governorsindh.com/",
	},
	{
		title: "EQ Mentor",
		subtitle: "AI-Powered Personalized Mentor (Hackathon Winner)",
		description:
			"Developed an innovative Generative AI-powered personalized mentoring platform that secured a top 10 position at the BWAI hackathon organized by GDGKolachi.",
		image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
		technologies: [
			"OpenAI",
			"Python",
			"FastAPI",
			"React.js",
			"TensorFlow",
			"Vector DB",
		],
		achievements: [
			"Secured top 10 position in BWAI hackathon by GDGKolachi",
			"Earned the 'Mentor' title for innovative AI solution",
			"Implemented personalized learning algorithms",
			"Created intuitive chat-based mentoring interface",
		],
		category: "AI/ML",
		year: "2024",
		team: "2 developers",
		status: "Prototype",
		impact: "Hackathon winner",
		colors: {
			primary: "from-yellow-600 to-orange-600",
			secondary: "border-yellow-400/30",
			accent: "text-yellow-500 dark:text-yellow-400",
		},
		link: "https://github.com/hamzaadil56/2024_AI_Challenge--LazyDevs-",
	},
];

export const skills = [
	{
		skill: "React.js",
		logo: ReactLogo,
	},
	{
		skill: "Next.js",
		logo: nextLogo,
	},
	{
		skill: "Tailwind CSS",
		logo: tailwindLogo,
	},
	{
		skill: "Node.js",
		logo: nodeLogo,
	},
	{
		skill: "Redux",
		logo: reduxLogo,
	},
	{
		skill: "Firebase",
		logo: firebaseLogo,
	},
	{
		skill: "Typescript",
		logo: typescriptLogo,
	},
	{
		skill: "Git",
		logo: gitLogo,
	},
	{
		skill: "MongoDB",
		logo: mongoLogo,
	},
	{
		skill: "PostgreSQL",
		logo: postgreLogo,
	},
	{
		skill: "Express.js",
		logo: expressLogo,
	},
	{
		skill: "Sanity",
		logo: sanityLogo,
	},
];
export const links = [
	{
		icon: GithubIcon,
		url: "https://github.com/hamzaadil56",
	},
	{
		icon: facebookIcon,
		url: "https://web.facebook.com/hamza.adil.549",
	},
	{
		icon: instagramIcon,
		url: "https://www.instagram.com/hamzaadil56/",
	},
	{
		icon: twitterIcon,
		url: "https://twitter.com/hamza_chemE_dev",
	},
	{
		icon: linkedinIcon,
		url: "https://www.linkedin.com/in/muhammad-hamza-adil/",
	},
];
