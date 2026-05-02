import { NextRequest, NextResponse } from "next/server";

export const BLOG_TOKEN_HEADER = "authorization";

/**
 * Verifies the Bearer token on a write request against `BLOG_ADMIN_TOKEN`.
 * Returns null if authorized, or a 401 NextResponse to short-circuit the route.
 */
export function verifyBlogAdmin(req: NextRequest): NextResponse | null {
	const expected = process.env.BLOG_ADMIN_TOKEN;
	if (!expected) {
		return NextResponse.json(
			{
				success: false,
				error:
					"Server is missing BLOG_ADMIN_TOKEN. See .env.example.",
			},
			{ status: 500 },
		);
	}
	const header = req.headers.get(BLOG_TOKEN_HEADER) ?? "";
	const match = /^Bearer\s+(.+)$/i.exec(header);
	const provided = match?.[1]?.trim();
	if (!provided || provided !== expected) {
		return NextResponse.json(
			{ success: false, error: "Unauthorized" },
			{ status: 401 },
		);
	}
	return null;
}
