import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atif Naz — Tech Lead & Senior Full-Stack Engineer: SaaS, AI & AWS",
  description:
    "Tech Lead & Senior Full-Stack Engineer. I lead a team of 10+ engineers, build scalable SaaS products on AWS, and deliver AI-powered automation. 5.5+ years. Available for contracts, agencies & leadership roles.",
  authors: [{ name: "Atif Naz" }],
  openGraph: {
    title: "Atif Naz — Tech Lead & Senior Full-Stack Engineer: SaaS, AI & AWS",
    description:
      "I lead a team of 10+ engineers and build scalable SaaS products on AWS — from architecture to client delivery.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atif Naz — Tech Lead & Senior Full-Stack Engineer: SaaS, AI & AWS",
    description:
      "I lead a team of 10+ engineers and build scalable SaaS products on AWS — from architecture to client delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Atif Naz",
              jobTitle: "Tech Lead & Senior Full-Stack Engineer: SaaS, AI & AWS",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              knowsAbout: [
                "Team Leadership",
                "Client Delivery",
                "AWS",
                "SaaS",
                "AI Engineering",
                "Next.js",
                "Laravel",
                "Node.js",
              ],
            }),
          }}
        />
      </head>
      <body className="relative min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}