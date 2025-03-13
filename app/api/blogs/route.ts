import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // adjust the path as needed
import { blogs } from "@/lib/db/schema/blog"; // adjust the path based on your project structure

export async function POST(req: Request) {
	try {
		// Parse the incoming FormData
		const formData = await req.formData();
		const imageField = formData.get("image");
		const titleField = formData.get("title");
		const descriptionField = formData.get("description");

		// Validate that all required fields are provided
		if (!imageField || !titleField || !descriptionField) {
			return NextResponse.json(
				{ error: "Missing required fields: image, title, description" },
				{ status: 400 }
			);
		}

		// Process the image field
		let imageData: string;
		if (imageField instanceof File) {
			// Convert the file to a Base64 string
			const buffer = Buffer.from(await imageField.arrayBuffer());
			imageData = buffer.toString("base64");
		} else {
			imageData = imageField.toString();
		}

		// Insert the new blog entry into the database
		const newBlog = await db
			.insert(blogs)
			.values({
				image: imageData,
				title: titleField.toString(),
				description: descriptionField.toString(),
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
