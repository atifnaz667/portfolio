"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Do you work remotely?",
    answer:
      "Yes. I work with distributed teams from PKT (UTC+5) and can overlap with European, UK and North American working hours.",
  },
  {
    question: "What size teams have you led?",
    answer:
      "I currently lead a team of 10+ engineers. I handle sprint planning, code reviews, scoping, mentoring, and direct client communication alongside hands-on development.",
  },
  {
    question: "What can you build?",
    answer:
      "SaaS applications, AI-powered workflows, event-driven pipelines on AWS, APIs, integrations, automation systems and real-time applications.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Yes. I can take ownership of existing Laravel, Node.js, Python, React and Next.js applications.",
  },
  {
    question: "Do you work with agencies?",
    answer:
      "Yes. I work with agencies as an engineering partner for client projects, ongoing development and technical delivery.",
  },
  {
    question: "Are you open to full-time roles?",
    answer:
      "Yes. I'm open to remote tech lead and senior engineering roles where I can lead a team, own architecture decisions, and work directly with clients or product stakeholders.",
  },
  {
    question: "What is your preferred tech stack?",
    answer:
      "Next.js + FastAPI for new AI products. Node.js or Laravel + React for robust business applications. AWS (Lambda, SQS, API Gateway) + Docker for infrastructure. I adapt to your existing stack.",
  },
  {
    question: "Do you offer AI consulting?",
    answer:
      "Yes — I help teams integrate LLMs, build agent workflows, and design RAG systems without breaking existing architecture.",
  },
  {
    question: "What is your typical project rate?",
    answer:
      "Rates depend on scope, duration and engagement type (fixed project, retainer or hourly). Send me a short brief and I'll reply with a proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          10 — FAQ
        </div>

        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked.
          </h2>
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border-b border-border/50">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition ${
                      openIndex === i ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
