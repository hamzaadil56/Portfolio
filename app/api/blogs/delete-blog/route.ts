import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // adjust the path as needed
import { blogsSchema } from "@/lib/db/schema/blog"; // adjust the path based on your project structure
import { eq } from "drizzle-orm";

export async function DELETE(req: Request) {
	// Check for API key in the Authorization header
	const authHeader = req.headers.get("authorization");
	const apiKey = authHeader?.replace("Bearer ", "");

	// Verify the API key against the environment variable
	if (!apiKey || apiKey !== process.env.AUTH_KEY) {
		return NextResponse.json(
			{ error: "Unauthorized: Invalid or missing API key" },
			{ status: 401 }
		);
	}

	try {
		// Parse the incoming FormData
		const { id } = await req.json();
		if (!id) {
			return NextResponse.json(
				{ error: "Missing required fields: id" },
				{ status: 400 }
			);
		}
		const newBlog = await db
			.delete(blogsSchema)
			.where(eq(blogsSchema.id, id))
			.returning();

		if (!newBlog[0]) {
			return NextResponse.json(
				{ error: "Blog not found" },
				{ status: 404 }
			);
		}

		// Respond with the created blog entry and a 201 status code
		return NextResponse.json(newBlog, { status: 201 });
	} catch (error: any) {
		// Handle unexpected errors gracefully
		return NextResponse.json(
			{ error: error.message || "Internal Server Error" },
			{ status: 500 }
		);
	}
}
