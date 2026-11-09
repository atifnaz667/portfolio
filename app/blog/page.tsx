import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog — Atif Naz",
  description: "Notes on AI agents, system architecture, and engineering.",
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Writing
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Notes from the field.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Deep dives into AI agents, scalable architecture, and the craft of
            shipping production systems.
          </p>

          {blogPosts.length > 0 ? (
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-accent/60"
                >
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono uppercase tracking-widest text-accent">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-14 rounded-2xl border border-border/60 bg-card/40 p-12 text-center">
              <p className="text-lg text-muted-foreground">
                New posts coming soon. Stay tuned.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}