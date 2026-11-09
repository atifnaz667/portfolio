"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    period: "Jan 2024 — Present",
    role: "Senior Software Engineer (Tech Lead)",
    company: "Techleadz",
    points: [
      "Lead a team of 10+ developers across several SaaS products for US clients, and act as the main technical contact for scoping, estimates, demos and roadmap calls.",
      "Built Scaled Creator from scratch as the sole engineer, then led the team that grew it to 4,000+ paying subscribers and 1M+ published posts.",
      "Designed the posting and webhook pipeline on AWS (API Gateway, SQS, Lambda), plus bulk backfill jobs that process 7,000 to 8,000 historic videos per new user without slowing the live app.",
      "Cut response times by 35% through Redis caching, query optimization and load balancing.",
      "Set up CI/CD with GitHub Actions and production error monitoring with Sentry.",
    ],
  },
  {
    period: "Jan 2023 — Dec 2023",
    role: "Senior Software Engineer",
    company: "Econex",
    points: [
      "Led a full-stack team building an ERP system, a property management system and an e-commerce platform.",
      "Ran sprint planning and shipped major releases on schedule.",
      "Introduced code review standards, Docker and CI/CD pipelines, reducing production bugs by 30%.",
    ],
  },
  {
    period: "Dec 2020 — Dec 2022",
    role: "Full Stack Developer",
    company: "Koncept Solutions",
    points: [
      "Built web applications for e-commerce, SaaS and business management clients with Laravel, Vue.js and React.",
      "Built REST APIs and SPAs for client products.",
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
