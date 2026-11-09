"use client";

import { useState, FormEvent } from "react";
import { Mail, Linkedin, Github, MapPin, Download, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    icon: Mail,
    label: "atifnaz667@gmail.com",
    href: "mailto:atifnaz667@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/atif-naz",
    href: "https://linkedin.com/in/atif-naz",
  },
  {
    icon: Github,
    label: "github.com/atifnaz667",
    href: "https://github.com/atifnaz667",
  },
  {
    icon: MapPin,
    label: "Lahore, Pakistan · PKT (UTC+5) · Overlap with Europe, UK & North America",
    href: null,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Contract / project",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMsg("Message sent! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "Contract / project", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="relative border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          09 — Get in touch
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Need someone to{" "}
              <span className="gradient-text">lead the engineering</span>?
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Whether you need a tech lead for your team, a senior engineer for
              a product build, or an agency partner for client delivery — I read
              every message and reply within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              {contactLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-accent">
                      <link.icon className="h-4 w-4" />
                    </span>
                    {link.label}
                  </a>
                ) : (
                  <div
                    key={link.label}
                    className="group flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-accent">
                      <link.icon className="h-4 w-4" />
                    </span>
                    {link.label}
                  </div>
                )
              )}
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/resume.pdf"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
            >
              <Download className="h-4 w-4 text-accent" /> Download Resume (PDF)
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass space-y-5 rounded-2xl p-6 sm:p-8"
            >
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  maxLength={200}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent disabled:opacity-50"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  maxLength={200}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent disabled:opacity-50"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent disabled:opacity-50"
                  >
                    <option>Contract / project</option>
                    <option>Team lead / full-time role</option>
                    <option>Agency partnership</option>
                    <option>AI consulting</option>
                    <option>Other</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Tell me about the project…"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent disabled:opacity-50"
                />
              </div>

              {/* Status message */}
              {status !== "idle" && status !== "loading" && (
                <div
                  className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
                    status === "success"
                      ? "border border-success/30 bg-success/10 text-success"
                      : "border border-destructive/30 bg-destructive/10 text-destructive"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:bg-accent-hover disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}