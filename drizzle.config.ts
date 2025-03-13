import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
	dialect: "postgresql",
	schema: "./lib/db/schema/*",
	out: "./lib/db/migrations",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
