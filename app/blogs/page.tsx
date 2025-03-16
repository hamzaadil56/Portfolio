import React from "react";
import { db } from "@/lib/db";
import { blogsSchema } from "@/lib/db/schema/blog";
import Image from "next/image";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
	const blogs = await db.select().from(blogsSchema);

	return (
		<div className="py-8 px-4 md:px-20">
			<h1 className="text-3xl font-bold mb-8 text-light-gray">Blogs</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogs.map((blog) => (
					<Link
						href={blog.url || "#"}
						target="_blank"
						rel="noopener noreferrer"
						key={blog.id}
					>
						<Card className="overflow-hidden border-0 max-w-sm shadow-sm bg-secondary-gray cursor-pointer transition-shadow hover:shadow-md">
							<div className="relative w-full">
								<Image
									src={blog.image}
									alt={blog.title}
									width={250}
									height={200}
									className="object-cover w-full"
								/>
							</div>
							<CardHeader className="pt-4 pb-2">
								<CardTitle className="text-lg text-light-gray">
									{blog.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="pb-2 text-light-gray">
								<p className="text-sm line-clamp-2 text-light-gray">
									{blog.description}
								</p>
							</CardContent>
							<CardFooter className="flex justify-between">
								{blog?.category && (
									<Badge
										variant="default"
										className="text-xs bg-main-gray text-light-gray"
									>
										{blog.category}
									</Badge>
								)}
								<span className="text-xs text-light-gray">
									{blog.publishedAt
										? new Date(
												blog.publishedAt
										  ).toLocaleDateString()
										: ""}
								</span>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
