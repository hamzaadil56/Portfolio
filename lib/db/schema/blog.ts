import { nanoid } from "@/lib/utils";
import { date, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const blogsSchema = pgTable("blogs", {
	id: varchar("id", { length: 191 })
		.primaryKey()
		.$defaultFn(() => nanoid()),
	image: text("image").notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description").notNull(),
	url: text("url").notNull().default("https://google.com"),
	category: text("category").default("web"),
	publishedAt: date("published_at").defaultNow(),
});
