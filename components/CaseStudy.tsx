"use client";

import AnimatedSection from "./AnimatedSection";

const caseDetails = [
  {
    label: "Problem",
    text: "TikTok Shop affiliate creators earn on one platform only. Reposting to Instagram, Facebook and YouTube with the right affiliate links is manual and time-consuming, and every new user brings thousands of existing videos that need processing.",
  },
  {
    label: "Solution",
    text: "A SaaS platform that matches TikTok products to Amazon listings using AI, auto-publishes to multiple social platforms with affiliate links, handles comment-to-DM automation, and schedules posts — turning one video into revenue across every channel.",
  },
  {
    label: "Architecture",
    text: "Event-driven pipeline on AWS: API Gateway receives webhooks, SQS queues decouple posting and processing jobs, Lambda handles execution. Load-balanced app tier with PostgreSQL and Docker.",
  },
  {
    label: "My role",
    text: "Built the entire product from scratch as the sole engineer. As the platform grew, led the team that scaled it — owning architecture decisions, the AWS pipeline, bulk backfill for thousands of videos per user, and AI-powered product matching.",
  },
  {
    label: "Challenges",
    text: "Processing 7,000–8,000 historic videos per new user without blocking the live app. Handling webhook spikes from multiple social platforms. Respecting each platform's rate limits while keeping publishing fast.",
  },
  {
    label: "Results",
    text: "10,000+ registered users, approximately 4,000 paying. Over 1 million posts published. Creators report their best months earning $12,000+ through cross-platform affiliate reach.",
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          03 — Case Study
        </div>

        <AnimatedSection>
          <div className="glass overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex items-center justify-center bg-gradient-to-br from-accent/30 via-teal-soft/10 to-transparent p-10 lg:p-14">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative">
                  <div className="font-mono text-xs uppercase tracking-widest text-sand">
                    Featured
                  </div>
                  <div className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    Scaled Creator
                  </div>
                  <div className="mt-3 text-muted-foreground">
                    Cross-platform affiliate automation for TikTok Shop creators.
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-10 lg:p-14">
                {caseDetails.map((detail) => (
                  <div key={detail.label}>
                    <div className="font-mono text-xs uppercase tracking-widest text-accent">
                      {detail.label}
                    </div>
                    <p className="mt-1.5 text-foreground/90">{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
