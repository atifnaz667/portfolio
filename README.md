# Atif Naz, portfolio

Source for my personal site: **[atifnaz.vercel.app](https://atifnaz.vercel.app)**

I'm a Tech Lead and Senior Full-Stack Engineer working on SaaS, AI and AWS. This site covers my experience, the products I've built (Scaled Creator, DotSimple), and the AI work I'm doing now.

## Stack

- Next.js 14 (App Router) and TypeScript
- Tailwind CSS
- Framer Motion for animation
- Lucide icons
- Nodemailer for the contact form
- Deployed on Vercel

## Structure

- `app/`: pages (home, blog), the contact API route, global styles and layout
- `components/`: one component per section (Hero, About, Experience, Skills, Projects, CaseStudy, Architecture, FAQ, Contact, and so on)
- `lib/blog-data.ts`: blog content
- `public/`: images, favicon and resume

## Running locally

```bash
npm install
npm run dev
```

The contact form needs these environment variables in `.env.local`:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_RECIPIENT=   # optional, defaults to SMTP_USER
```

Production build:

```bash
npm run build
```

## Usage

The code is public so people can see how I work. The design, written content and photos are not licensed for reuse.
