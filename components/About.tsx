"use client";

import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "5.5", suffix: "+", label: "Years experience" },
  { value: "10", suffix: "+", label: "Engineers led" },
  { value: "10k", suffix: "+", label: "Users on platform" },
  { value: "15", suffix: "+", label: "Production projects" },
];

const snapshot = [
  { label: "Location", value: "Lahore, Pakistan" },
  { label: "Timezone", value: "PKT (UTC+5) · flexible EU/UK/NA overlap" },
  { label: "Focus", value: "Team leadership · SaaS · AI · AWS" },
  { label: "Availability", value: "Contracts, agencies & leadership roles" },
  { label: "Response", value: "< 24 hours" },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          08 — About
        </div>

        <AnimatedSection>
          <h2 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Engineering at the intersection of{" "}
            <span className="text-balance">scalable systems</span> &{" "}
            <span className="gradient-text">artificial intelligence</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-14 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m <span className="text-foreground">Atif Naz</span>, a tech
                lead and senior full-stack engineer based in Lahore, Pakistan, working
                remotely with US, UK and European teams. With{" "}
                <span className="text-foreground">
                  5.5+ years of hands-on experience
                </span>
                , I lead a team of 10+ developers, act as the main technical contact
                for clients, and own architecture and releases.
              </p>
              <p>
                My recent work is{" "}
                <span className="text-foreground">
                  social and creator automation
                </span>
                : products that publish to several platforms at once, process thousands
                of videos per user, and handle bursts of webhooks without falling over.
                I build the AI parts too — from content generation to matching products
                across marketplaces.
              </p>
              <p>
                I design event-driven architectures on AWS (Lambda, SQS, API Gateway),
                set up CI/CD with GitHub Actions, monitor with Sentry, and make sure
                the systems I build stay up after launch. The best engineering is the
                kind you don&apos;t notice — it just works and scales.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Snapshot
              </div>
              <ul className="space-y-3 text-sm">
                {snapshot.map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-between border-b border-border/40 pb-2 last:border-0"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-foreground">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6">
                <div
                  className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
                >
                  <span className="inline-flex items-baseline">
                    <span>{stat.value}</span>
                    <span>{stat.suffix}</span>
                  </span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
