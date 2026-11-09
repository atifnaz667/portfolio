"use client";

import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projectsData = [
  {
    title: "Scaled Creator",
    description:
      "AI-powered affiliate automation SaaS for TikTok Shop creators. Matches products across marketplaces using AI, auto-publishes to Instagram, Facebook and YouTube with affiliate links, handles comment-to-DM automation, and schedules posts. Built from scratch, then led the team as it grew.",
    tags: ["AWS Lambda", "SQS", "API Gateway", "Node.js", "PostgreSQL", "Docker"],
    result: "4,000+ paying subscribers · 10,000+ sign-ups · 1M+ posts published",
    badge: "SaaS · AI · AWS",
    link: "https://scaledcreator.com/",
  },
  {
    title: "DotSimple — Social Media SaaS",
    description:
      "Austrian B2B social media management platform. Built the core managed posting system: upload once and publish to every connected platform, scheduling, best-time-to-post auto-publishing per user timezone, and AI post generation with variations. Also built integrations with Pipedrive CRM and Zapier.",
    tags: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS SQS"],
    result: "350+ B2B customers",
    badge: "SaaS · Social Platforms",
    link: "https://dotsimple.io",
  },
  {
    title: "AI Voice Support Agent",
    description:
      "AI-powered phone support agent: speech understanding, real-time actions (order lookups, bookings), knowledge-base answers via RAG, and human handoff. Multi-tenant SaaS architecture from the schema level up.",
    tags: ["Python", "FastAPI", "OpenAI", "RAG", "WebSockets", "PostgreSQL"],
    result: "In progress",
    badge: "AI · Voice · SaaS",
    link: "",
  },
  {
    title: "Intelligent Chat",
    description:
      "Enterprise real-time messaging platform with presence, read receipts, and file sharing.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB", "Redis"],
    result: "Production · real-time at scale",
    badge: "Real-time · WebSockets",
    link: "https://intelligentcontacts.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          02 — Selected Work
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <AnimatedSection>
            <h2 className="max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Selected work, real engineering.
            </h2>
          </AnimatedSection>
          <div className="pb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {String(projectsData.length).padStart(2, "0")} projects
          </div>
        </div>

        <div className="mt-12 border-t border-border/80">
          {projectsData.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.05}>
              <article className="group grid gap-4 border-b border-border/60 py-7 md:grid-cols-[72px_minmax(0,1fr)_300px] md:gap-x-8">
                <div className="font-display text-xl text-accent md:pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sand">
                      {project.badge}
                    </span>
                    {project.link && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link}
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="text-sm leading-snug text-foreground">
                    {project.result}
                  </div>
                  <div className="font-mono text-[11px] leading-relaxed text-accent">
                    {project.tags.join(" · ")}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
