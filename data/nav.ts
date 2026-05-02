export const sectionNav = [
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "work", label: "Work" },
	{ id: "hackathons", label: "Hackathons" },
	{ id: "demos", label: "Demos" },
	{ id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sectionNav)[number]["id"];
