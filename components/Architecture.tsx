"use client";

import { Workflow, Network, BrainCircuit, Layers } from "lucide-react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const architectures = [
  {
    icon: Workflow,
    title: "Scaled Creator Publishing Pipeline",
    description:
      "Webhooks land at API Gateway, fan out through SQS queues per platform, and Lambda workers publish with per-platform rate limiting and retry logic.",
    steps: ["Webhook", "API Gateway", "SQS", "Lambda", "Platform API"],
  },
  {
    icon: Network,
    title: "Event-Driven Microservices",
    description:
      "API Gateway routes to Lambda handlers; long-running jobs decoupled via SQS with DLQ + retry backoff.",
    steps: ["API Gateway", "Lambda", "SQS", "DLQ"],
  },
  {
    icon: BrainCircuit,
    title: "RAG Pipeline",
    description:
      "Chunk → embed → store → semantic retrieval → LLM synthesis with citations.",
    steps: ["Ingest", "Chunk", "Vector DB", "LLM"],
  },
  {
    icon: Layers,
    title: "Scalable Web Architecture",
    description:
      "Load-balanced Docker containers, Redis cache layer, and PostgreSQL primary/replica with read-scaling.",
    steps: ["LB", "App", "Redis", "PG Primary", "PG Replica"],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          05 — Architecture
        </div>

        <AnimatedSection>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Systems that scale under pressure.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A snapshot of production architectures — the design decisions that make
            each system fast, resilient, and cheap to run.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {architectures.map((arch, i) => (
            <AnimatedSection key={arch.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition hover:border-accent/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <arch.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{arch.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {arch.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {arch.steps.map((step, j) => (
                    <span key={step} className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="rounded-md border border-accent/40 bg-accent/5 px-2 py-1 text-foreground">
                        {step}
                      </span>
                      {j < arch.steps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-accent" />
                      )}
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
