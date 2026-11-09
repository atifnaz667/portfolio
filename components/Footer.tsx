"use client";

import { Github, Linkedin, Mail, Rss } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/atifnaz667" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/atif-naz" },
  { icon: Mail, label: "Email", href: "mailto:atifnaz667@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight">
              Atif <span className="text-accent">Naz</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Tech Lead & Senior Full-Stack Engineer · SaaS, AI & AWS
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground transition hover:border-accent hover:text-accent"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <div>© 2026 Atif Naz.</div>
          <div className="font-mono">Crafted by a human + AI collaboration.</div>
        </div>
      </div>
    </footer>
  );
}
