export type YoutubeDemo = {
	id: string;
	youtubeId: string;
	title: string;
	description: string;
	tags: string[];
};

// Each entry just needs the YouTube video ID — the player + thumbnail
// (https://i.ytimg.com/vi/{id}/maxresdefault.jpg) are wired up automatically.
export const youtubeDemos: YoutubeDemo[] = [
	{
		id: "talkforms-walkthrough",
		youtubeId: "FClc0IV9Ris",
		title: "TakForms — An alternative of Google Forms with LLMs walkthrough",
		description:
			"Demo of TakForms, a Google Forms alternative with LLMs: how it uses natural language to help admins to create forms and analyze responses, and how it provides a more intuitive experience for respondents.",
		tags: ["React", "Python", "FastAPI", "OpenAI Agents SDK"],
	},
	{
		id: "yourteacher-walkthrough",
		youtubeId: "4urXIeZKRI0",
		title: "YourTeacher — agentic AI tutor walkthrough",
		description:
			"Demo of the autonomous personalised tutor: how it adapts the lesson plan to a learner's style and uses RAG over reference material.",
		tags: ["AI", "Agentic", "RAG", "Streamlit"],
	},

	// ADD_NEXT_DEMO_HERE — drop in the YouTube ID + a short description:
	// {
	// 	id: "demo-slug",
	// 	youtubeId: "REPLACE_ME",
	// 	title: "...",
	// 	description: "...",
	// 	tags: ["..."],
	// },
];
