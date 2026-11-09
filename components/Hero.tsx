"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/3 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(44,158,163,0.45), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" aria-hidden="true">
        <ParticleNetwork />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-muted-foreground">
                Available for remote contracts, agency partnerships and leadership roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-6xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl md:text-8xl lg:text-[6rem]"
            >
              <span className="gradient-text">ATIF NAZ</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-base"
            >
              Tech Lead & Senior Full-Stack Engineer{" "}
              <span className="text-accent">/</span> SaaS, AI & AWS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              I lead a team of 10+ engineers, work directly with clients from
              scoping to release, and build the systems behind products that run
              at scale — event-driven pipelines on AWS, AI-powered automation,
              and full-stack SaaS applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/80"
            >
              5.5+ years · Leads 10+ engineers · AWS · Client-facing delivery
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-teal-soft to-primary px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-3 text-sm font-medium backdrop-blur hover:border-accent/60"
              >
                Let&apos;s Work Together
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 mx-auto lg:order-2 lg:mx-0"
          >
            <div className="relative animate-float">
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 120deg at 50% 50%, rgba(44,158,163,0.5), rgba(255,203,154,0.12), rgba(17,100,102,0.45), rgba(44,158,163,0.5))",
                }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-[1.75rem] p-[1.5px] accent-glow"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(44,158,163,0.9), rgba(17,100,102,0.3) 40%, rgba(255,255,255,0.05) 70%, rgba(17,100,102,0.6))",
                }}
              >
                <div className="relative overflow-hidden rounded-[1.65rem] glass">
                  <img
                    src="atif.png"
                    alt="Portrait of Atif Naz, Tech Lead and Senior Full-Stack Engineer"
                    width={352}
                    height={440}
                    className="block h-[340px] w-[272px] object-cover sm:h-[400px] sm:w-[320px] lg:h-[440px] lg:w-[352px]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, transparent 30%, transparent 70%, rgba(17,25,26,0.5) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                    </span>
                    <span className="text-muted-foreground">Lahore, PK</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
