import { nanoid } from "@/lib/utils";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
	id: varchar("id", { length: 191 })
		.primaryKey()
		.$defaultFn(() => nanoid()),
	image: text("image").notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description").notNull(),
});
