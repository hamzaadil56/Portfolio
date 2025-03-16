import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // adjust the path as needed
import { blogsSchema } from "@/lib/db/schema/blog"; // adjust the path based on your project structure

export async function GET(req: Request) {
	try {
		// Insert the new blog entry into the database
		const allBlogs = await db.select().from(blogsSchema);

		return NextResponse.json(allBlogs, { status: 200 });
	} catch (error: any) {
		// Handle unexpected errors gracefully
		return NextResponse.json(
			{ error: error.message || "Internal Server Error" },
			{ status: 500 }
		);
	}
}
