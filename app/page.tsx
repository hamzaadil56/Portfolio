import { Nav } from "@/components/chrome/nav";
import { Footer } from "@/components/chrome/footer";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { CaseStudies } from "@/components/sections/case-studies";
import { Hackathons } from "@/components/sections/hackathons";
import { YoutubeDemos } from "@/components/sections/youtube-demos";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
	return (
		<>
			<ScrollProgress />
			<Nav />
			<main className="relative">
				<Hero />
				<About />
				<Skills />
				<ExperienceSection />
				<CaseStudies />
				<Hackathons />
				<YoutubeDemos />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
