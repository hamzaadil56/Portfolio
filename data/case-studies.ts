export type ArchNodeTone = "blue" | "green" | "amber" | "gray";

export type FeatureIcon =
	| "users"
	| "video"
	| "music"
	| "book"
	| "upload"
	| "check"
	| "sparkles";

export type Block =
	| { kind: "p"; html: string }
	| {
			kind: "callout";
			tone?: "accent" | "success" | "amber";
			html: string;
	  }
	| { kind: "quote"; text: string }
	| { kind: "flow"; steps: { title: string; desc: string }[] }
	| { kind: "techGrid"; items: { category: string; name: string }[] }
	| {
			kind: "techRows";
			rows: { category: string; tags: string[] }[];
	  }
	| {
			kind: "featureGrid";
			items: { icon?: FeatureIcon; title: string; desc: string }[];
	  }
	| {
			kind: "archDiagram";
			caption?: string;
			layers: {
				label: string;
				nodes: { text: string; tone?: ArchNodeTone }[];
				separator?: "arrow" | "biarrow";
			}[];
	  }
	| {
			kind: "challengeGrid";
			items: { label: string; text: string; solved?: boolean }[];
	  }
	| {
			kind: "results";
			items: { num?: string; headline: string; detail: string }[];
	  };

export type CaseStudySection = {
	label: string;
	heading: string;
	blocks: Block[];
};

export type CaseStudy = {
	slug: string;
	eyebrow: string;
	title: string;
	subtitle: string;
	cardDescription: string;
	metaChips: string[];
	stats: { num: string; label: string }[];
	sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
	{
		slug: "mahaana-corporate-transactions",
		eyebrow: "Mahaana Wealth · Y Combinator W22 · 2025",
		title: "Architecting the Corporate Transactions Module",
		subtitle:
			"Designing and delivering a full-stack, end-to-end transaction system — from employer portal to regulatory submission — as the sole full-stack engineer on the project.",
		cardDescription:
			"Designed and shipped a message-driven transaction pipeline for Pakistan's first digital pension AMC — employer portal, admin approval, background jobs, and CDC integration, end-to-end.",
		metaChips: [
			"ASP.NET Core",
			"Blazor Server",
			"Azure Service Bus",
			"Microservices",
			"Background Jobs",
			"CDC Integration",
		],
		stats: [
			{ num: "1", label: "Engineer. The entire system." },
			{ num: "3", label: "Integrated portals built" },
			{ num: "15K+", label: "Pension users served" },
			{ num: "0", label: "Transaction failures at launch" },
		],
		sections: [
			{
				label: "Context",
				heading:
					"Pakistan's first digital pension system — and a transaction pipeline that didn't exist yet",
				blocks: [
					{
						kind: "p",
						html: "Mahaana Wealth is Pakistan's first digital Asset Management Company, backed by Y Combinator (W22). Its core product is a digital pension platform serving over 15,000 users — a mission-critical financial system where every transaction directly affects retirement savings.",
					},
					{
						kind: "p",
						html: "Corporate clients — employers enrolling their entire workforce into pension plans — needed a way to initiate <strong>deposit and redemption transactions</strong> on behalf of their employees. These transactions had to flow through a strict approval chain before reaching <strong>CDC (Central Depository Company)</strong>, Pakistan's national financial clearing authority.",
					},
					{
						kind: "p",
						html: "No such system existed. I was assigned as the <strong>sole full-stack engineer</strong> to design it, build it, and ship it — from the employer-facing UI to the microservice that fires the final API call to CDC.",
					},
					{
						kind: "callout",
						tone: "accent",
						html: "<strong>End-to-end implementation ownership.</strong> Working within an established architecture and alongside a lead engineer, I was handed a blank user story and made it production-ready — translating the existing system's patterns into a new, fully functioning transaction pipeline from the first line of code to the final CDC integration.",
					},
				],
			},
			{
				label: "The Challenge",
				heading:
					"Three portals, one financial authority, zero margin for error",
				blocks: [
					{
						kind: "p",
						html: "Pension transactions in Pakistan operate under strict regulatory oversight. A single misrouted or duplicated transaction could mean the wrong amount landing in the wrong account — with real financial and legal consequences. The system had to be <strong>correct, auditable, and fault-tolerant</strong> by design.",
					},
					{
						kind: "challengeGrid",
						items: [
							{
								label: "Challenge 01",
								text: "The employer portal, admin portal, and CDC integration lived across different services. They needed to share transaction state without tight coupling or synchronous blocking calls.",
							},
							{
								label: "Challenge 02",
								text: "Admin approval had to be role-gated, with specific Blazor Server UI flows for approvers. Bypassing approval — even accidentally — had to be architecturally impossible.",
							},
							{
								label: "Challenge 03",
								text: "The CDC API is an external financial system with its own rate limits, retry semantics, and failure modes. The integration needed to handle failures gracefully without data loss.",
							},
							{
								label: "Challenge 04",
								text: "Background jobs processing approved transactions had to be idempotent. A job running twice due to a service restart could not trigger a duplicate CDC submission.",
							},
						],
					},
				],
			},
			{
				label: "My Approach",
				heading:
					"A message-driven approval pipeline with guaranteed delivery",
				blocks: [
					{
						kind: "p",
						html: "I designed the system around a core principle: <strong>each stage of the transaction lifecycle is owned by exactly one service, and transitions between stages are driven by messages — not direct calls</strong>. This meant the employer portal, approval service, and CDC dispatcher could fail and restart independently without corrupting transaction state.",
					},
					{
						kind: "quote",
						text: "The architecture isn't clever — it's conservative. In financial systems, conservative is the right kind of smart.",
					},
					{
						kind: "flow",
						steps: [
							{
								title: "Employer initiates transaction — Corporate Portal (Blazor Server)",
								desc: "I built the transaction creation UI on the Corporate Portal in Blazor Server with C#. The employer selects the employee, transaction type (deposit or redemption), and amount. On submission, the transaction is persisted to the database with a <strong>Pending</strong> status. No money moves at this stage. A message is published to Azure Service Bus to notify downstream services.",
							},
							{
								title: "Admin reviews and approves — Admin Portal (Blazor Server, role-gated)",
								desc: "I built a dedicated admin-facing transaction queue on the Admin Portal. Access is controlled by ASP.NET Core role-based authorization — only users with the designated approver role can view and act on pending transactions. On approval, the transaction status is updated to <strong>Approved</strong> and a second Service Bus message is published. On rejection, the employer is notified and the transaction is marked <strong>Rejected</strong> with a reason.",
							},
							{
								title: "Background job picks up approved transaction",
								desc: "I implemented a background job service within the ASP.NET Core microservice layer. The job subscribes to the <strong>Approved</strong> queue on Azure Service Bus. It reads the transaction, validates the payload, and prepares the CDC-compliant request structure. The job is designed to be <strong>idempotent</strong> — if it runs twice on the same transaction, the second execution is a no-op.",
							},
							{
								title: "CDC API submission with retry and error handling",
								desc: "The background job calls the CDC third-party API to submit the transaction. I implemented retry logic with exponential backoff for transient failures. On success, the transaction is marked <strong>CDC Approved</strong> and the deposit or redemption amount is confirmed to the destination account. On hard failure, the transaction is flagged for manual review and an alert is triggered.",
							},
							{
								title: "Full audit trail and status propagation back to portals",
								desc: "Every state transition — from Pending to CDC Approved — is logged with a timestamp, actor, and event type. Both the Corporate Portal and Admin Portal reflect the live transaction status via real-time Blazor Server component updates, giving employers and admins a consistent, accurate view of every transaction in the system.",
							},
						],
					},
				],
			},
			{
				label: "Key Technical Decisions",
				heading:
					"Why Azure Service Bus — and why not direct HTTP calls",
				blocks: [
					{
						kind: "p",
						html: "The natural instinct would be to have the admin approval trigger a direct HTTP call to the CDC dispatcher microservice. I rejected this for three reasons: <strong>tight coupling, no delivery guarantee, and no replay capability</strong>.",
					},
					{
						kind: "p",
						html: "Azure Service Bus gave me durable message delivery, dead-letter queues for failed messages, and complete decoupling between the approval service and the CDC dispatcher. If the dispatcher is down when an admin approves a transaction, the message sits in the queue and is processed when the service recovers — no transaction is lost.",
					},
					{
						kind: "callout",
						tone: "accent",
						html: "<strong>The dead-letter queue as a safety net.</strong> Every unprocessable message is routed to a dead-letter queue with the failure reason. This gave the ops team a recovery path for any edge case — instead of silent data loss, they had a queue of messages to inspect and replay.",
					},
					{
						kind: "p",
						html: "For the background job implementation, I chose a hosted service within ASP.NET Core (IHostedService) over a standalone process — keeping the job co-located with the microservice that owned the transaction domain, reducing infrastructure complexity while maintaining clear ownership.",
					},
					{
						kind: "techGrid",
						items: [
							{
								category: "Frontend",
								name: "Blazor Server + Blazorise",
							},
							{
								category: "Backend",
								name: "ASP.NET Core Microservices",
							},
							{
								category: "Messaging",
								name: "Azure Service Bus",
							},
							{
								category: "Jobs",
								name: "IHostedService (Background Jobs)",
							},
							{
								category: "Auth",
								name: "ASP.NET Core Role-Based Auth",
							},
							{
								category: "Integration",
								name: "CDC Third-Party API",
							},
							{
								category: "Patterns",
								name: "MVVM, Event-Driven Architecture",
							},
							{ category: "Cloud", name: "Azure DevOps CI/CD" },
						],
					},
				],
			},
			{
				label: "Challenges Solved",
				heading: "The problems I had to solve that weren't in any spec",
				blocks: [
					{
						kind: "challengeGrid",
						items: [
							{
								label: "Problem",
								text: "Race condition: two admin users could theoretically approve the same transaction simultaneously, causing a duplicate CDC submission.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Optimistic concurrency control on the transaction entity — the approval operation checks and updates the status in a single atomic database transaction, making double-approval architecturally impossible.",
							},
							{
								label: "Problem",
								text: "CDC API returns non-standard error codes. A mapping layer was needed to translate CDC responses into meaningful internal transaction states.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Built a CDC response translator in the dispatcher microservice that maps all known CDC error codes to typed internal results, with a fallback to manual review for unknown codes.",
							},
							{
								label: "Problem",
								text: "Blazor Server's real-time connection meant admin portal UI had to reflect status changes pushed from a background service — not triggered by user actions.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Used Blazor Server's built-in SignalR connection with InvokeAsync and StateHasChanged to push transaction status updates from the service layer into live UI components without page refresh.",
							},
						],
					},
				],
			},
			{
				label: "Results",
				heading: "What shipped, and what it delivered",
				blocks: [
					{
						kind: "results",
						items: [
							{
								headline:
									"End-to-end transaction pipeline live in production",
								detail: "The full Corporate Transactions Module — employer portal, admin approval, background job, and CDC integration — was designed, built, and deployed to production by a single engineer with zero critical launch defects.",
							},
							{
								headline:
									"Zero duplicate or lost transactions at launch",
								detail: "The idempotency design and Service Bus dead-letter queue architecture meant that even in edge-case failure scenarios, no transaction was processed twice or silently dropped.",
							},
							{
								headline:
									"Corporate onboarding unblocked for all employer clients",
								detail: "Before this module, corporate clients had no mechanism to process transactions digitally. Its delivery unlocked the corporate segment of Mahaana's pension product — directly expanding the platform's revenue capability.",
							},
							{
								headline:
									"Full audit trail for every transaction state change",
								detail: "Every transition — creation, approval, rejection, CDC submission, confirmation — is logged with actor and timestamp. The compliance team could reconstruct the complete lifecycle of any transaction from a single query.",
							},
							{
								headline:
									"Decoupled architecture that scales independently",
								detail: "Because each stage communicates via Azure Service Bus rather than direct calls, the CDC dispatcher can be scaled, replaced, or modified without touching the employer or admin portals — giving the engineering team long-term flexibility.",
							},
						],
					},
					{
						kind: "callout",
						tone: "success",
						html: "<strong>The bigger picture:</strong> This wasn't just a feature. It was the infrastructure that made corporate pension transactions legally compliant, operationally reliable, and regulatorily auditable — for Pakistan's first digital AMC, at scale.",
					},
				],
			},
			{
				label: "Reflection",
				heading: "What this project taught me about building for trust",
				blocks: [
					{
						kind: "p",
						html: "Most software mistakes are recoverable. A broken UI can be fixed in a hotfix. A slow query can be optimised. But in financial systems, <strong>a lost or duplicated transaction has real consequences for real people</strong> — their savings, their employer's records, their regulatory standing.",
					},
					{
						kind: "p",
						html: "Working as the sole engineer on this feature sharpened one instinct above all else: <em>design for failure first, then design for the happy path</em>. The dead-letter queue, the idempotency checks, the optimistic concurrency — none of these are visible to the user. But they're the reason the user can trust the system.",
					},
					{
						kind: "p",
						html: "I also learned what it means to own a system end-to-end. There was no one to hand a problem off to. Every edge case, every CDC error code, every Blazor Server quirk — it was mine to figure out. That kind of ownership changes how you think about architecture. You stop optimising for elegance and start optimising for reliability.",
					},
				],
			},
		],
	},
	{
		slug: "dreamstream-cms",
		eyebrow: "MegaParsec (mParsec) · 2023 – 2024 · Inflight Entertainment",
		title: "Building the DreamStream Content Management System from the ground up",
		subtitle:
			"Architecting a full-stack cloud CMS for an inflight entertainment platform — from content provider onboarding to admin-approved deployment on PIA aircraft — where real passengers streamed content at altitude.",
		cardDescription:
			"Full-stack cloud CMS for an inflight entertainment platform — provider onboarding, OneDrive→S3 bulk ingestion, admin approval, and deployment packaging for Airfi devices.",
		metaChips: [
			"AWS Amplify",
			"React.js",
			"GraphQL",
			"AWS Lambda",
			"Amazon S3",
			"OneDrive API",
			"Airfi Devices",
		],
		stats: [
			{
				num: "60s",
				label: "GBs of content transferred from OneDrive to S3",
			},
			{
				num: "1",
				label: "Engineer. Full system — frontend, backend, cloud.",
			},
			{ num: "6+", label: "Content types supported end-to-end" },
			{
				num: "PIA",
				label: "Live on Pakistan International Airlines flights",
			},
		],
		sections: [
			{
				label: "Context",
				heading:
					"Entertainment at 35,000 feet runs on content — and someone has to manage it",
				blocks: [
					{
						kind: "p",
						html: "DreamStream is an inflight entertainment platform deployed on <strong>Airfi devices</strong> — compact servers installed aboard aircraft with a fixed storage allocation. Passengers connect to a local Wi-Fi network and stream movies, music, audiobooks, and ebooks directly from the onboard server. No internet connection. No satellite latency. Just content, loaded before the flight and served locally at altitude.",
					},
					{
						kind: "p",
						html: "The hard part isn't the streaming. The hard part is <strong>getting the right content onto the right device before the plane takes off</strong> — securely, reliably, and at scale. That requires a full content management pipeline: content providers uploading their libraries, admins reviewing and approving, and the final package deploying to Airfi servers.",
					},
					{
						kind: "p",
						html: "None of this infrastructure existed. mParsec brought me in as the <strong>sole full-stack engineer</strong> to architect and build the entire CMS — from the React.js frontend to the AWS Lambda backend to the S3 storage layer — using the AWS Amplify full-stack framework.",
					},
					{
						kind: "callout",
						tone: "accent",
						html: "<strong>The constraint that shaped everything:</strong> Airfi devices have a fixed memory ceiling. Every byte matters. The CMS had to not only manage content — it had to manage it precisely, with the right metadata, right formats, and right approval gates, so that only deployment-ready content ever reached the device.",
					},
				],
			},
			{
				label: "System Architecture",
				heading:
					"Three actors. One pipeline. Zero tolerance for bad data on a plane.",
				blocks: [
					{
						kind: "p",
						html: "I structured the entire system around three distinct actors and their responsibilities. Each actor has a defined scope — content providers can only see their own content, admins have full oversight, and Airfi devices only receive approved packages. This boundary design was a deliberate architectural decision, not an afterthought.",
					},
					{
						kind: "archDiagram",
						caption: "System flow overview",
						layers: [
							{
								label: "Layer 1 — Content ingestion",
								separator: "arrow",
								nodes: [
									{ text: "Content Provider", tone: "blue" },
									{
										text: "CMS Portal (React.js)",
										tone: "blue",
									},
									{ text: "OneDrive API", tone: "blue" },
									{ text: "S3 Bucket (AWS)", tone: "blue" },
								],
							},
							{
								label: "Layer 2 — API & processing",
								separator: "biarrow",
								nodes: [
									{
										text: "GraphQL API (Amplify)",
										tone: "gray",
									},
									{
										text: "AWS Lambda Functions",
										tone: "gray",
									},
									{ text: "DynamoDB / RDS", tone: "gray" },
								],
							},
							{
								label: "Layer 3 — Review & deployment",
								separator: "arrow",
								nodes: [
									{ text: "Admin Portal", tone: "amber" },
									{ text: "Content Approval", tone: "amber" },
									{
										text: "Airfi Server Package",
										tone: "green",
									},
								],
							},
						],
					},
					{
						kind: "p",
						html: "AWS Amplify was the backbone. It generates a fully-typed <strong>GraphQL API</strong> from a database schema definition — meaning the API layer, resolvers, and data models were all generated and maintained from a single source of truth. AWS Lambda functions handled all server-side logic: file validation, metadata processing, content state transitions, and the OneDrive-to-S3 transfer pipeline.",
					},
					{
						kind: "quote",
						text: "Schema-first development with Amplify meant the frontend and backend stayed in sync automatically. Every change to the data model propagated to the GraphQL API — no contract drift, no manual mapping.",
					},
				],
			},
			{
				label: "My Contribution",
				heading:
					"Every layer of the stack — designed, built, and shipped by one engineer",
				blocks: [
					{
						kind: "p",
						html: "As the sole full-stack engineer, my scope covered the entire system: frontend architecture in React.js, backend logic in AWS Lambda, API design with Amplify's GraphQL layer, and the cloud infrastructure on AWS. Here is what I built, feature by feature.",
					},
					{
						kind: "flow",
						steps: [
							{
								title: "Content provider registration, authentication & authorisation",
								desc: "I implemented the full onboarding flow for content providers using <strong>AWS Amplify Auth</strong> (backed by Amazon Cognito). Providers register, verify their email, and are issued role-scoped credentials. Authorization rules at the GraphQL layer ensure each provider can only read and write their own content records — enforced at the API level, not the UI level.",
							},
							{
								title: "Content creation onboarding flow — 6 content types",
								desc: "I designed and built a multi-step content creation form in React.js that adapts dynamically based on content type. A movie form collects IMDB rating, Rotten Tomatoes score, genre, director, and cast. An audiobook form collects author, narrator, and chapters. An ebook collects publisher and ISBN. Each form is validated client-side before a Lambda function processes the submission server-side — preventing malformed records from ever reaching the database.",
							},
							{
								title: "OneDrive-to-S3 bulk transfer pipeline — GBs in under 60 seconds",
								desc: "This was the most technically demanding piece of the system. Content providers store their libraries on Microsoft OneDrive. Rather than re-uploading files manually, I built a Lambda-powered pipeline that authenticates with the provider's OneDrive via the Microsoft Graph API, streams files in parallel using <strong>S3 multipart upload</strong>, and transfers entire batches of large media files — movies, high-resolution audio, PDFs — into the DreamStream S3 bucket. The combination of async I/O, multipart chunking, and parallelised Lambda invocations brought transfer time for GB-scale batches down to <strong>60–90 seconds</strong>.",
							},
							{
								title: "Admin review and content approval portal",
								desc: "I built a separate admin-facing React.js dashboard with elevated Cognito role permissions. Admins can browse all submitted content across all providers, preview metadata, and approve or reject individual items. On approval, the content record transitions to a <strong>Deployment Ready</strong> state. Rejected content is returned to the provider with a reason. Only approved content is eligible for inclusion in the next Airfi device package.",
							},
							{
								title: "Airfi device deployment packaging",
								desc: "Once content is approved, it is queued for deployment to Airfi servers. I designed the packaging layer to respect the <strong>device memory ceiling</strong> — grouping approved content into device-sized bundles and generating the manifest files that Airfi servers consume to populate their local libraries before each flight.",
							},
						],
					},
				],
			},
			{
				label: "Features Delivered",
				heading:
					"A complete content management platform — not a prototype",
				blocks: [
					{
						kind: "p",
						html: "This wasn't a proof of concept. Every feature below shipped and was used by real content providers to populate real Airfi devices.",
					},
					{
						kind: "featureGrid",
						items: [
							{
								icon: "users",
								title: "Provider registration & auth",
								desc: "Cognito-backed auth with role-scoped access. Providers see only their own content.",
							},
							{
								icon: "video",
								title: "Movie content creation",
								desc: "IMDB rating, Rotten Tomatoes, genre, director, cast, runtime, and trailer fields.",
							},
							{
								icon: "music",
								title: "Music & audio management",
								desc: "Song and album metadata, genre, artist, and audio file upload with format validation.",
							},
							{
								icon: "book",
								title: "Ebook & audiobook ingestion",
								desc: "Author, narrator, publisher, ISBN, chapter count. PDF and audio file formats supported.",
							},
							{
								icon: "upload",
								title: "OneDrive → S3 bulk transfer",
								desc: "Multipart parallel upload via Graph API + Lambda. GBs transferred in 60–90 seconds.",
							},
							{
								icon: "check",
								title: "Admin approval workflow",
								desc: "Full content review queue with approve/reject actions and status propagation back to providers.",
							},
						],
					},
				],
			},
			{
				label: "Engineering Challenges",
				heading:
					"The problems that required more than just writing code",
				blocks: [
					{
						kind: "challengeGrid",
						items: [
							{
								label: "Problem",
								text: "Uploading GB-scale media files via a browser form would time out, saturate memory, and fail for any large library. A simple file input was architecturally inadequate for the scale of content providers' libraries.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Built a Lambda-orchestrated pipeline that uses the Microsoft Graph API to stream files directly from the provider's OneDrive into S3 using multipart upload — bypassing the browser entirely. Files are chunked, uploaded in parallel, and assembled in S3. The browser only triggers the operation; the heavy lifting happens server-to-server.",
							},
							{
								label: "Problem",
								text: "AWS Lambda has a 15-minute execution timeout. Large batch transfers of a full content library could exceed this, leaving transfers in an unknown partial state with no recovery path.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Designed the transfer pipeline as a fan-out architecture — a coordinator Lambda breaks the OneDrive file list into chunks and invokes individual worker Lambdas per file in parallel. Each worker handles one file independently, so no single Lambda holds the entire batch. The coordinator tracks completion and reports overall status once all workers return.",
							},
							{
								label: "Problem",
								text: "Six different content types (movies, songs, audiobooks, ebooks, PDFs, audio) each require completely different metadata fields. A single static form would either be overwhelming or incomplete.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Built a dynamic form engine in React.js where each content type maps to a schema definition object. The form renders only the relevant fields for the selected type, validates against the schema, and serialises into the correct GraphQL mutation shape before submission. Adding a new content type requires only a new schema entry — no new form component.",
							},
							{
								label: "Problem",
								text: "Airfi devices have a fixed memory ceiling. Deploying unapproved, incorrectly-formatted, or oversized content to a device mid-flight would corrupt the entertainment library with no way to roll back.",
							},
							{
								label: "Solution",
								solved: true,
								text: "Enforced a strict three-gate content lifecycle: format validation at upload, metadata validation at submission, and admin approval before deployment eligibility. No content advances to the next gate without passing the previous one. The deployment package generator only reads from the Approved state — making it structurally impossible to deploy unreviewed content.",
							},
						],
					},
				],
			},
			{
				label: "Technology",
				heading: "The stack that made it work",
				blocks: [
					{
						kind: "techRows",
						rows: [
							{
								category: "Frontend",
								tags: [
									"React.js",
									"AWS Amplify UI",
									"GraphQL (generated)",
									"React Hook Form",
								],
							},
							{
								category: "Backend",
								tags: [
									"AWS Lambda (Node.js)",
									"AWS Amplify API",
									"GraphQL Resolvers",
									"Amazon Cognito",
								],
							},
							{
								category: "Storage",
								tags: [
									"Amazon S3",
									"S3 Multipart Upload",
									"AWS Amplify Storage",
								],
							},
							{
								category: "Integrations",
								tags: [
									"Microsoft Graph API",
									"OneDrive API",
									"Airfi Device SDK",
								],
							},
							{
								category: "Architecture",
								tags: [
									"Schema-first (Amplify)",
									"Fan-out Lambda pattern",
									"Role-based auth (Cognito)",
									"Three-gate content lifecycle",
								],
							},
						],
					},
				],
			},
			{
				label: "Results",
				heading: "What shipped — and what it made possible",
				blocks: [
					{
						kind: "results",
						items: [
							{
								num: "60s",
								headline:
									"GB-scale content libraries transferred from OneDrive to S3",
								detail: "The fan-out Lambda pipeline with S3 multipart upload reduced content ingestion time from what would have been hour-long manual uploads to 60–90 second automated transfers — making it practical for providers to refresh their entire library before a flight window.",
							},
							{
								num: "6+",
								headline:
									"Content types supported with a single dynamic form engine",
								detail: "Movies, songs, audiobooks, ebooks, PDFs, and audio — all managed through one schema-driven form architecture. New content types can be added without building new form components.",
							},
							{
								num: "0",
								headline:
									"Unapproved content deployable to Airfi devices",
								detail: "The three-gate lifecycle design made deploying unreviewed content structurally impossible — not just policy-enforced. No manual check required; the architecture enforces it.",
							},
							{
								num: "1",
								headline:
									"End-to-end system: registration to deployment, built by one engineer",
								detail: "From provider onboarding to Airfi device packaging — every layer of the stack designed, implemented, and shipped by a single full-stack engineer using AWS Amplify's full-stack framework.",
							},
						],
					},
					{
						kind: "callout",
						tone: "success",
						html: "<strong>The measure of the system:</strong> A content provider with a 10GB movie library can log in, authenticate via OneDrive, trigger a transfer, and have their entire catalogue reviewed-and-deployment-ready — all from a browser, in under two minutes. That's what the architecture was built to enable.",
					},
				],
			},
			{
				label: "Reflection",
				heading:
					"What building for a constrained environment teaches you",
				blocks: [
					{
						kind: "p",
						html: "Most web applications are elastic — if you need more storage, you provision it; if the page loads slowly, you optimise later. Airfi devices operate in the opposite reality. <strong>The memory ceiling is physical and fixed.</strong> You can't add storage at 35,000 feet.",
					},
					{
						kind: "p",
						html: "That constraint changed how I thought about every design decision on DreamStream. The three-gate content lifecycle, the admin approval layer, the metadata validation at upload — all of it exists because the cost of a mistake isn't a bad user experience. It's a broken entertainment library on a six-hour flight with no recovery path.",
					},
					{
						kind: "p",
						html: "The OneDrive-to-S3 pipeline taught me something different: <em>the fastest code is the code that doesn't run in the browser</em>. Moving the transfer server-to-server, breaking it into a fan-out of parallel Lambdas, letting S3's multipart API do the heavy lifting — these decisions turned a fundamentally slow problem into a 60-second operation. Constraints, it turns out, are just architecture problems with a deadline.",
					},
				],
			},
		],
	},
	{
		slug: "automily",
		eyebrow: "mParsec · 2024",
		title: "Automily — GenAI QA Automation Platform",
		subtitle:
			"A GenAI-powered QA automation platform that turns plain-English specs into executable browser tests — with a self-healing layer that re-anchors selectors when the UI drifts.",
		cardDescription:
			"Plain-English specs → executable Playwright flows. Self-healing selectors keep regression suites green when the UI drifts.",
		metaChips: [
			"LLMs",
			"Playwright",
			"Agent Planning",
			"Self-Healing",
			"React",
			"TypeScript",
		],
		stats: [
			{ num: "Lead", label: "Owned product end-to-end" },
			{ num: "10x", label: "Faster suite authoring" },
			{ num: "Self", label: "Healing selectors" },
		],
		sections: [
			{
				label: "Context",
				heading: "Regression suites that survive UI drift",
				blocks: [
					{
						kind: "p",
						html: "Traditional QA automation breaks the moment a button moves or a selector changes. Automily uses LLMs to plan test flows from plain English, a deterministic runner to execute them, and a <strong>self-healing layer</strong> that re-anchors selectors when the UI drifts.",
					},
				],
			},
			{
				label: "My Approach",
				heading:
					"LLM planner, deterministic runner, self-healing layer",
				blocks: [
					{
						kind: "flow",
						steps: [
							{
								title: "Plan test flow from natural language",
								desc: "The agent turns a plain-English spec into a structured plan: steps, assertions, expected state.",
							},
							{
								title: "Execute in a Playwright sandbox",
								desc: "A deterministic runner executes the plan in an isolated Playwright environment.",
							},
							{
								title: "Self-heal when selectors drift",
								desc: "When a selector misses, the healing layer re-anchors using semantic context and updates the test for future runs.",
							},
						],
					},
				],
			},
			{
				label: "Results",
				heading: "What shipped",
				blocks: [
					{
						kind: "results",
						items: [
							{
								headline: "Days → minutes for suite authoring",
								detail: "Early-access teams cut regression-suite authoring time dramatically.",
							},
							{
								headline: "Reporting UI for failing flows",
								detail: "I built the dashboard that surfaces failures with their healed and original states.",
							},
						],
					},
				],
			},
		],
	},
	{
		slug: "governor-sindh",
		eyebrow: "Governor Sindh IT Initiative · 2023",
		title: "Governor Sindh IT Initiative — Public Portal at Scale",
		subtitle:
			"Public-facing portal and admissions pipeline for a province-wide programme training tens of thousands of students — handling 25K+ concurrent users at peak.",
		cardDescription:
			"Province-wide admissions pipeline that survived a viral moment — 25K+ concurrent users at peak, Next.js + Node BFF + Postgres with edge caching.",
		metaChips: [
			"Next.js",
			"Node.js",
			"Postgres",
			"Edge Caching",
			"BFF Pattern",
		],
		stats: [
			{ num: "25K+", label: "Concurrent users at peak" },
			{ num: "500K+", label: "Students processed" },
			{ num: "1", label: "Government program" },
		],
		sections: [
			{
				label: "Context",
				heading: "Turning a one-off project into infrastructure",
				blocks: [
					{
						kind: "p",
						html: "Built the public-facing portal and admissions pipeline for the Governor Sindh IT Initiative — application, cohort assignment, attendance, certification. At peak load it served <strong>25K+ concurrent users</strong> during result announcements.",
					},
				],
			},
			{
				label: "My Approach",
				heading: "BFF, aggressive caching, edge-friendly rendering",
				blocks: [
					{
						kind: "techGrid",
						items: [
							{ category: "Frontend", name: "Next.js" },
							{ category: "BFF", name: "Node.js" },
							{ category: "Database", name: "Postgres" },
							{ category: "Caching", name: "Edge + Application" },
						],
					},
				],
			},
			{
				label: "Results",
				heading: "Surviving the viral moment",
				blocks: [
					{
						kind: "results",
						items: [
							{
								headline: "Held under 25K+ concurrent load",
								detail: "Result-day traffic didn't take the site down — caching and BFF design absorbed the spike.",
							},
							{
								headline: "End-to-end admissions pipeline live",
								detail: "Applications, cohort assignment, attendance, certification — all in one system.",
							},
						],
					},
				],
			},
		],
	},
];

export function getCaseStudy(slug: string) {
	return caseStudies.find((c) => c.slug === slug);
}
