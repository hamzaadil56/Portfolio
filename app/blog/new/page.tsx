import type { Metadata } from "next";
import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
import { BlogForm } from "@/components/blog/blog-form";

export const metadata: Metadata = {
	title: "New post · admin",
	robots: { index: false, follow: false },
};

export default function NewBlogPage() {
	return (
		<>
			<Nav />
			<main className="relative pt-32 pb-32">
				<div className="container">
					<BlogForm />
				</div>
			</main>
			<Footer />
		</>
	);
}
