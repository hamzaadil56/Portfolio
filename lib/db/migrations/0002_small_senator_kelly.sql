ALTER TABLE "blogs" ALTER COLUMN "url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "category" SET DEFAULT 'web';--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "published_at" date DEFAULT now();