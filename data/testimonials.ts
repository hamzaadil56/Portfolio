export type Testimonial = {
	id: string;
	quote: string;
	name: string;
	role: string;
	company: string;
	avatar: string;
};

export const testimonials: Testimonial[] = [
	{
		id: "t1",
		quote:
			"Hamza shipped our agentic AI MVP in three weeks. Clean code, clean handoff, and the product just worked on day one.",
		name: "Sara Lindqvist",
		role: "Founder",
		company: "Lumen AI",
		avatar: "https://i.pravatar.cc/96?img=47",
	},
	{
		id: "t2",
		quote:
			"Rare combination of front-end taste and back-end depth. He owned the whole stack and we never had to translate between layers.",
		name: "Daniel Okafor",
		role: "CTO",
		company: "Ravelin Labs",
		avatar: "https://i.pravatar.cc/96?img=12",
	},
	{
		id: "t3",
		quote:
			"Our LangChain pipeline was leaking tokens and timing out. Hamza rebuilt it in a week and cut our latency by 60%.",
		name: "Priya Raman",
		role: "Head of Engineering",
		company: "Northwind",
		avatar: "https://i.pravatar.cc/96?img=32",
	},
	{
		id: "t4",
		quote:
			"He treats UX with the same seriousness as system design. The dashboard he built for us is the best part of our product.",
		name: "Marco Bellini",
		role: "Product Lead",
		company: "Faro",
		avatar: "https://i.pravatar.cc/96?img=68",
	},
	{
		id: "t5",
		quote:
			"Reliable, fast, and asks the right questions before writing a single line of code. Already booked him for the next phase.",
		name: "Aisha Khan",
		role: "Founder",
		company: "Stack & Story",
		avatar: "https://i.pravatar.cc/96?img=49",
	},
	{
		id: "t6",
		quote:
			"He onboarded into a messy Next.js codebase and started shipping production fixes by day two. Genuine 10x engineer.",
		name: "Ben Carter",
		role: "Engineering Manager",
		company: "Loopline",
		avatar: "https://i.pravatar.cc/96?img=15",
	},
];
