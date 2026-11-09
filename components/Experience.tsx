"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    period: "Jan 2024 — Present",
    role: "Senior Software Engineer, Team Lead",
    company: "Techleadz",
    points: [
      "Lead a team of 10+ developers across several client products for US-based clients.",
      "Main technical contact for clients: scoping, estimates, demos and roadmap calls.",
      "Architected an event-driven posting and webhook pipeline on AWS (API Gateway, SQS, Lambda) for a creator automation SaaS serving 10,000+ users.",
      "Built bulk backfill jobs that process thousands of historic videos per new user without slowing the live app.",
      "Shipped AI features including cross-marketplace product matching and AI-powered content generation.",
    ],
  },
  {
    period: "2023",
    role: "Team Lead",
    company: "Econex",
    points: [
      "Managed a team of engineers across full-stack and DevOps.",
      "Delivered major product releases on time with consistent quality.",
      "Introduced Docker containerization and CI/CD pipelines with GitHub Actions.",
    ],
  },
  {
    period: "Dec 2020 — Dec 2022",
    role: "Full Stack Developer",
    company: "Koncept Solutions",
    points: [
      "Built end-to-end web applications for e-commerce and fintech clients.",
      "Developed RESTful APIs and SPAs with Laravel and Vue.js.",
      "Integrated payments, messaging and shipping APIs to automate business workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          07 — Experience
        </div>

        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Where I&apos;ve built.
          </h2>
        </AnimatedSection>

        <div className="relative mt-14 ml-4 sm:ml-8">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
              boxShadow:
                "0 0 20px color-mix(in oklab, var(--accent) 40%, transparent)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.period} delay={i * 0.1}>
                <div className="relative pl-8 sm:pl-12">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent"
                    style={{
                      boxShadow: "0 0 18px rgba(44,158,163,0.6)",
                    }}
                  />

                  <div className="font-mono text-xs uppercase tracking-widest text-accent">
                    {exp.period}
                  </div>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-muted-foreground">
                      — {exp.company}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
