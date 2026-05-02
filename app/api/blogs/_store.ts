import { promises as fs } from "fs";
import path from "path";

export interface Blog {
	id: string;
	title: string;
	url: string;
	platform: string;
	date: string;
	readTime: string;
	description: string;
	tags: string[];
	gradient: string;
	platformColor: string;
	createdAt: string;
	updatedAt: string;
}

const STORE_PATH = path.join(process.cwd(), "data", "blogs.json");

const SEED: Blog[] = [
	{
		id: "1",
		title: "What is metaprogramming and its role in AI Workflows?",
		url: "https://dev.to/hamzaadil56/what-is-metaprogramming-io7",
		platform: "Dev.to",
		date: "2024",
		readTime: "8 min read",
		description:
			"Exploring the fascinating world of metaprogramming and how it's revolutionizing AI workflows. Learn about code that writes code and its applications in modern AI systems.",
		tags: ["Metaprogramming", "AI", "Programming", "Automation"],
		gradient: "from-accent to-accent-2",
		platformColor: "text-success",
		createdAt: "2024-09-01T00:00:00.000Z",
		updatedAt: "2024-09-01T00:00:00.000Z",
	},
	{
		id: "2",
		title: "What is MCP (Model Context Protocol), and why is it generating so much buzz?",
		url: "https://medium.com/@hamzaadil56/what-is-mcp-model-context-protocol-and-why-is-it-generating-so-much-buzz-c53b7dc48493",
		platform: "Medium",
		date: "2024",
		readTime: "6 min read",
		description:
			"Diving deep into the Model Context Protocol (MCP) and understanding why it's creating waves in the AI community. Discover how MCP is changing the landscape of AI model interactions.",
		tags: ["MCP", "AI", "Protocol", "Machine Learning"],
		gradient: "from-accent-2 to-accent",
		platformColor: "text-accent",
		createdAt: "2024-11-15T00:00:00.000Z",
		updatedAt: "2024-11-15T00:00:00.000Z",
	},
];

async function ensureStore(): Promise<Blog[]> {
	try {
		const raw = await fs.readFile(STORE_PATH, "utf-8");
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : SEED;
	} catch (err) {
		// File missing or invalid — seed it.
		await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
		await fs.writeFile(STORE_PATH, JSON.stringify(SEED, null, 2), "utf-8");
		return SEED;
	}
}

async function persist(blogs: Blog[]): Promise<void> {
	await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
	await fs.writeFile(STORE_PATH, JSON.stringify(blogs, null, 2), "utf-8");
}

export async function getAllBlogs(): Promise<Blog[]> {
	const blogs = await ensureStore();
	return [...blogs].sort(
		(a, b) =>
			new Date(b.createdAt).getTime() -
			new Date(a.createdAt).getTime(),
	);
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
	const blogs = await ensureStore();
	return blogs.find((b) => b.id === id);
}

export async function createBlog(
	data: Omit<Blog, "id" | "createdAt" | "updatedAt">,
): Promise<Blog> {
	const blogs = await ensureStore();
	const now = new Date().toISOString();
	const next: Blog = {
		...data,
		id: Date.now().toString(),
		createdAt: now,
		updatedAt: now,
	};
	blogs.push(next);
	await persist(blogs);
	return next;
}

export async function updateBlog(
	id: string,
	patch: Partial<Omit<Blog, "id" | "createdAt">>,
): Promise<Blog | null> {
	const blogs = await ensureStore();
	const idx = blogs.findIndex((b) => b.id === id);
	if (idx === -1) return null;
	blogs[idx] = {
		...blogs[idx],
		...patch,
		updatedAt: new Date().toISOString(),
	};
	await persist(blogs);
	return blogs[idx];
}

export async function deleteBlog(id: string): Promise<boolean> {
	const blogs = await ensureStore();
	const idx = blogs.findIndex((b) => b.id === id);
	if (idx === -1) return false;
	blogs.splice(idx, 1);
	await persist(blogs);
	return true;
}
