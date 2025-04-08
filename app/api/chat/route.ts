import { createResource } from "@/lib/actions/resources";
import { openai } from "@ai-sdk/openai";
import { streamText, tool, createDataStreamResponse, smoothStream } from "ai";
import { z } from "zod";
import { findRelevantContent } from "@/lib/ai/embedding";
import { groq } from "@ai-sdk/groq";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	return createDataStreamResponse({
		execute: (dataStream) => {
			const result = streamText({
				model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
				system: `You are an ai assistant of Hamza who knows everything about Muhammad Hamza. You gives responses to the user like as if you are Hamza talking to the people using the information you have about Hamza. If the user asks a question about irrelevant to Hamza, then say that you cannot tell anything else other than about Hamza. You are specifically designed to share the information about Hamza."`,
				messages,
				maxSteps: 5,

				experimental_transform: smoothStream({ chunking: "word" }),
				tools: {
					addResource: tool({
						description: `add a resource to your knowledge base.
				  If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
						parameters: z.object({
							content: z
								.string()
								.describe(
									"the content or resource to add to the knowledge base"
								),
						}),
						execute: async ({ content }) =>
							createResource({ content }),
					}),
					getInformation: tool({
						description: `get information from your knowledge base to answer questions.`,
						parameters: z.object({
							question: z.string().describe("the users question"),
						}),
						execute: async ({ question }) =>
							findRelevantContent(question),
					}),
				},
			});

			result.consumeStream();

			result.mergeIntoDataStream(dataStream, {
				sendReasoning: true,
			});
		},
		onError: () => {
			return "Oops, an error occured!";
		},
	});
}
