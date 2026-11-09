"use client";

import AnimatedSection from "./AnimatedSection";

const phases = [
  { title: "Architecture", text: "Scope the problem and design a system that fits the team and budget." },
  { title: "Development", text: "Ship clean, tested features in small, reviewable increments." },
  { title: "Integrations", text: "Connect payments, CRMs, social and communication APIs reliably." },
  { title: "AI", text: "Add LLM features where they earn their place in the workflow." },
  { title: "Deployment", text: "Containerised, repeatable releases on AWS or a VPS." },
  { title: "Maintenance", text: "Monitor, debug and keep improving after launch." },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          04 — How I work
        </div>

        <AnimatedSection>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            From first call to ongoing support.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card/40 p-6">
                <div className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-semibold">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
