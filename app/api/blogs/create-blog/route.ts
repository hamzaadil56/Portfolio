import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // adjust the path as needed
import { blogsSchema } from "@/lib/db/schema/blog"; // adjust the path based on your project structure

export async function POST(req: Request) {
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
		const formData = await req.formData();
		const imageField = formData.get("image");
		const titleField = formData.get("title");
		const descriptionField = formData.get("description");
		const categoryField = formData.get("category");
		const url = formData.get("url");

		// Validate that all required fields are provided
		if (!imageField || !titleField || !descriptionField) {
			return NextResponse.json(
				{ error: "Missing required fields: image, title, description" },
				{ status: 400 }
			);
		}

		// Process the image field
		const imageFile = imageField as File;
		const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
		const base64Data = imageBuffer.toString("base64");
		const mimeType = imageFile.type;
		const imageData = `data:${mimeType};base64,${base64Data}`;

		// Insert the new blog entry into the database
		const newBlog = await db
			.insert(blogsSchema)
			.values({
				image: imageData,
				title: titleField.toString(),
				description: descriptionField.toString(),
				category: categoryField?.toString(),
				url: url?.toString(),
			})
			.returning();

		// Respond with the created blog entry and a 201 status code
		return NextResponse.json(newBlog[0], { status: 201 });
	} catch (error: any) {
		// Handle unexpected errors gracefully
		return NextResponse.json(
			{ error: error.message || "Internal Server Error" },
			{ status: 500 }
		);
	}
}
