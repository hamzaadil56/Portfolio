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
