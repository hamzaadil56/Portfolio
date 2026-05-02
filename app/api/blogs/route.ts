import { NextRequest, NextResponse } from "next/server";
import { getAllBlogs, createBlog } from "./_store";
import { verifyBlogAdmin } from "@/lib/auth-blog";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		const blogs = await getAllBlogs();
		return NextResponse.json({ success: true, data: blogs });
	} catch (err) {
		console.error("GET /api/blogs failed:", err);
		return NextResponse.json(
			{ success: false, error: "Failed to fetch blogs" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
	const unauthorized = verifyBlogAdmin(request);
	if (unauthorized) return unauthorized;

	try {
		const body = await request.json();
		const required = ["title", "url", "platform", "description"] as const;
		for (const key of required) {
			const value = body?.[key];
			if (typeof value !== "string" || !value.trim()) {
				return NextResponse.json(
					{
						success: false,
						error: `Missing or empty required field: ${key}`,
					},
					{ status: 400 },
				);
			}
		}

		const blog = await createBlog({
			title: body.title.trim(),
			url: body.url.trim(),
			platform: body.platform.trim(),
			date: body.date?.trim() || new Date().getFullYear().toString(),
			readTime: body.readTime?.trim() || "5 min read",
			description: body.description.trim(),
			tags: Array.isArray(body.tags)
				? body.tags
						.filter(
							(t: unknown) =>
								typeof t === "string" && t.trim().length > 0,
						)
						.map((t: string) => t.trim())
				: [],
			gradient: body.gradient || "from-accent to-accent-2",
			platformColor: body.platformColor || "text-accent",
		});

		return NextResponse.json(
			{ success: true, data: blog },
			{ status: 201 },
		);
	} catch (err) {
		console.error("POST /api/blogs failed:", err);
		return NextResponse.json(
			{ success: false, error: "Failed to create blog." },
			{ status: 500 },
		);
	}
}
