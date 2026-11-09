"use client";

import { Rocket, BrainCircuit, Server, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const offers = [
  {
    icon: Rocket,
    title: "Build a SaaS product",
    description: "Architecture → backend → frontend → integrations → deployment on AWS.",
  },
  {
    icon: BrainCircuit,
    title: "Add AI to an existing product",
    description: "LLM APIs → RAG → agents → tool calling → business workflows.",
  },
  {
    icon: Server,
    title: "Build complex backend systems",
    description:
      "APIs → queues → Lambda workers → Redis → PostgreSQL → third-party integrations.",
  },
  {
    icon: Handshake,
    title: "Lead your engineering team",
    description:
      "Sprint planning → code reviews → mentoring → client communication → technical delivery.",
  },
];

export default function WhatIOwn() {
  return (
    <section id="own" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          01 — What I can own
        </div>

        <AnimatedSection>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Give me the problem. I&apos;ll own the engineering.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            For startups, software agencies and businesses that need a senior
            engineer to build, extend or maintain production systems.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {offers.map((offer, i) => (
            <AnimatedSection key={offer.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-accent/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <offer.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{offer.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
