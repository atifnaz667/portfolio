"use client";

import { Layers, BrainCircuit, Cloud, Wrench, Users, Server } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    icon: Users,
    title: "Leadership & Delivery",
    skills: ["Leading 10+ engineers", "Client communication", "Scoping & estimates", "Sprint planning", "Code review", "Mentoring"],
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "SQS", "API Gateway", "Docker", "GitHub Actions", "Sentry", "Redis"],
  },
  {
    icon: Layers,
    title: "Full-Stack",
    skills: ["Laravel", "Node.js", "Next.js", "React", "Vue.js", "FastAPI", "PostgreSQL", "MySQL"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    skills: ["LLM APIs", "AI content generation", "Product matching", "RAG", "AI Agents"],
  },
  {
    icon: Wrench,
    title: "Integrations",
    skills: ["TikTok", "Instagram", "Facebook", "YouTube APIs", "Stripe", "Pipedrive", "Zapier", "Webhooks"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          06 — Skills
        </div>

        <AnimatedSection>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            What I build.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The problems I solve, and the tools I use to solve them.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.05}>
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-accent/60 ${
                  category.highlight
                    ? "border-accent/40 bg-gradient-to-br from-accent/10 to-transparent"
                    : "border-border bg-card/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/60 bg-background/40 px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
