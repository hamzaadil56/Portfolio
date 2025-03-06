import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: ["./lib/db/schema/embedding.ts", "./lib/db/schema/resources.ts"],
	out: "./lib/db/migrations",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
