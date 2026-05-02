import { NextRequest, NextResponse } from "next/server";
import { getBlogById, updateBlog, deleteBlog } from "../_store";
import { verifyBlogAdmin } from "@/lib/auth-blog";

export const dynamic = "force-dynamic";

export async function GET(
	_request: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const blog = await getBlogById(params.id);
		if (!blog) {
			return NextResponse.json(
				{ success: false, error: "Blog not found" },
				{ status: 404 },
			);
		}
		return NextResponse.json({ success: true, data: blog });
	} catch (err) {
		console.error("GET /api/blogs/[id] failed:", err);
		return NextResponse.json(
			{ success: false, error: "Failed to fetch blog" },
			{ status: 500 },
		);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const unauthorized = verifyBlogAdmin(request);
	if (unauthorized) return unauthorized;

	try {
		const body = await request.json();
		const updated = await updateBlog(params.id, body);
		if (!updated) {
			return NextResponse.json(
				{ success: false, error: "Blog not found" },
				{ status: 404 },
			);
		}
		return NextResponse.json({ success: true, data: updated });
	} catch (err) {
		console.error("PUT /api/blogs/[id] failed:", err);
		return NextResponse.json(
			{ success: false, error: "Failed to update blog" },
			{ status: 500 },
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const unauthorized = verifyBlogAdmin(request);
	if (unauthorized) return unauthorized;

	try {
		const ok = await deleteBlog(params.id);
		if (!ok) {
			return NextResponse.json(
				{ success: false, error: "Blog not found" },
				{ status: 404 },
			);
		}
		return NextResponse.json({
			success: true,
			message: "Blog deleted successfully",
		});
	} catch (err) {
		console.error("DELETE /api/blogs/[id] failed:", err);
		return NextResponse.json(
			{ success: false, error: "Failed to delete blog" },
			{ status: 500 },
		);
	}
}
