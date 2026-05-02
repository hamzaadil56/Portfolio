"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/primitives/reveal";
import { SectionShell } from "@/components/sections/section-shell";

const stanzas = [
	{
		eyebrow: "01",
		heading: (
			<>
				Three years.{" "}
				<span className="text-fg-muted">Production systems.</span>{" "}
				Real users.
			</>
		),
		body: (
			<>
				At <span className="text-fg">Mahaana (YC W22)</span> I architect
				the customer & corporate SPAs that 15,000+ Pakistani savers use
				to onboard their pension. Before that I led{" "}
				<span className="text-fg">Automily</span> at mParsec — a GenAI
				QA-automation platform — and shipped{" "}
				<span className="text-fg">DreamStream</span>, the IFE platform
				now flying on PIA aircraft.
			</>
		),
	},
	{
		eyebrow: "02",
		heading: (
			<>
				Framework-agnostic,{" "}
				<span className="text-fg-muted">but opinionated.</span>
			</>
		),
		body: (
			<>
				React and Next.js are where I spend most of my craft. ASP.NET
				Core and FastAPI are where I reach when the contract gets
				serious — events on Azure Service Bus, microservices, queues
				that don&apos;t lose messages. The framework is a tool. The
				system is the product.
			</>
		),
	},
	{
		eyebrow: "03",
		heading: (
			<>
				I work best with people who care about{" "}
				<span className="text-gradient">UX as much as system design.</span>
			</>
		),
		body: (
			<>
				If your roadmap reads &ldquo;ship fast, but it has to feel
				right&rdquo;, we&apos;ll get along. I bring agency-grade
				frontend craft and the backend depth to back it. I work with
				freelance clients, joining startups as a founding engineer, and
				short-term contracts with engineering teams who need extra
				horsepower.
			</>
		),
	},
];

export function About() {
	return (
		<SectionShell
			id="about"
			eyebrow="// about"
			title={
				<>
					I build software that <span className="text-gradient">ships</span>.
				</>
			}
			intro="My resume in three stanzas. Scroll."
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
				<div className="lg:col-span-8 space-y-24 md:space-y-32">
					{stanzas.map((s, i) => (
						<Reveal key={i} delay={i * 0.05}>
							<div data-stanza className="max-w-2xl">
								<p className="font-mono text-micro uppercase tracking-[0.3em] text-accent mb-4">
									{s.eyebrow}
								</p>
								<h3 className="font-display font-semibold text-display-lg md:text-display-xl text-fg leading-[1.05] tracking-tight">
									{s.heading}
								</h3>
								<p className="mt-6 text-body-lg md:text-h3 text-fg-muted leading-snug">
									{s.body}
								</p>
							</div>
						</Reveal>
					))}
				</div>

				<aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
					<motion.div
						initial={{ opacity: 0, x: 16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-15% 0px" }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="rounded-lg border border-border bg-surface p-6 ring-soft"
					>
						<p className="font-mono text-micro uppercase tracking-[0.3em] text-fg-subtle">
							Now
						</p>
						<p className="mt-3 font-display text-h3 text-fg leading-tight">
							Building corporate SPAs at{" "}
							<span className="text-accent">Mahaana</span>.
						</p>
						<dl className="mt-6 space-y-3 text-caption">
							<div className="flex justify-between gap-4">
								<dt className="text-fg-subtle">Location</dt>
								<dd className="text-fg-muted">Karachi, PK</dd>
							</div>
							<div className="flex justify-between gap-4">
								<dt className="text-fg-subtle">Stack today</dt>
								<dd className="text-fg-muted text-right">
									React · TS · ASP.NET Core
								</dd>
							</div>
							<div className="flex justify-between gap-4">
								<dt className="text-fg-subtle">Availability</dt>
								<dd className="text-success">
									Open to work
								</dd>
							</div>
						</dl>
					</motion.div>
				</aside>
			</div>
		</SectionShell>
	);
}
