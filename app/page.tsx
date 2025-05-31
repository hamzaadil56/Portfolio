import Background from "@/components/layout/Background";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
	return (
		<>
			<Hero title="We transform ideas into" isHomePage={true} />
			{/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
		</>
	);
}
