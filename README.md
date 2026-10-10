# Edgeway Security — Website

A multi-page, SEO-friendly, animated website for **Edgeway Security Inc.** (security guards, cameras & vehicle patrol services).

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui**.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York)
- **Fonts:** Sora (headings) + Inter (body) via `next/font/google`
- **Forms:** react-hook-form + zod
- **Icons:** Lucide React
- **Database:** Prisma ORM + SQLite (contact form submissions log)

## Quick Start (Local)

### Prerequisites

- **Node.js 18.17+** or **Bun** (recommended, faster)
  - Install Bun: https://bun.sh/docs/install

### Install & Run

```bash
# 1. Install dependencies
bun install
#   (or: npm install)

# 2. Push the database schema (creates/updates the SQLite db)
bun run db:push
#   (or: npx prisma db push)

# 3. Start the dev server
bun run dev
#   (or: npm run dev)
```

Open **http://localhost:3000** in your browser.

### Build for Production

```bash
bun run build
bun run start
```

## Project Structure

```
.
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (fonts, SEO, JSON-LD, header/footer)
│   │   ├── page.tsx            # Home (landing)
│   │   ├── globals.css         # Theme tokens (near-black + gold) + utilities
│   │   ├── services/page.tsx   # Services page
│   │   ├── industries/page.tsx # Industries page
│   │   ├── about/page.tsx      # About page
│   │   ├── contact/page.tsx    # Contact page
│   │   └── api/
│   │       ├── route.ts        # API health
│   │       └── contact/route.ts # Contact form handler (zod-validated)
│   ├── components/
│   │   ├── site/               # Edgeway-specific sections
│   │   │   ├── header.tsx      # Sticky nav + mobile menu
│   │   │   ├── hero.tsx        # Hero section
│   │   │   ├── stats.tsx       # Stats band
│   │   │   ├── services*.tsx   # Services preview + full
│   │   │   ├── industries*.tsx # Industries preview + full
│   │   │   ├── about*.tsx      # About teaser + full
│   │   │   ├── process.tsx     # 4-step process
│   │   │   ├── contact.tsx     # Contact form
│   │   │   ├── cta-band.tsx    # Reusable CTA
│   │   │   ├── page-header.tsx # Reusable page header
│   │   │   ├── reveal.tsx      # Scroll-animation wrapper
│   │   │   └── site-data.ts    # All site content (services, industries, etc.)
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/
│   │   ├── use-scroll-reveal.ts # IntersectionObserver scroll animations
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── utils.ts           # cn() helper
│       └── db.ts               # Prisma client
├── public/
│   ├── logo-mark.jpg          # Edgeway logo
│   ├── favicon.jpg
│   └── images/                 # Optimized photos (hero, camera, patrol, patch)
├── prisma/
│   └── schema.prisma           # Database schema
├── db/custom.db                # SQLite database file
├── .env                        # DATABASE_URL (relative path)
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, services preview, industries preview, about teaser, CTA |
| `/services` | All 3 service divisions (guards, cameras, patrol) with expandable offerings |
| `/industries` | All 9 industries served |
| `/about` | Why Edgeway, stats, 4-step process |
| `/contact` | Contact form (posts to `/api/contact`) |

## Features

- **SEO-friendly:** per-page metadata, JSON-LD structured data (LocalBusiness + Service schemas), semantic HTML, single `<h1>` per page, canonical URLs, OpenGraph/Twitter cards
- **Animated:** scroll-triggered reveal animations (fade-up, slide, scale) — respects `prefers-reduced-motion`
- **Accessible:** skip link, ARIA labels, keyboard nav, focus states, reduced-motion support
- **Responsive:** mobile-first, tested 390px → 1440px
- **Contact form:** zod-validated, posts to `/api/contact` (in-memory log — swap for email/CRM in production)

## Customizing Content

All site content (services, industries, contact info, etc.) lives in **`src/components/site/site-data.ts`**. Edit there to update text, and the changes propagate across all pages.

## Design

- **Background:** near-black (`#080810`) — matches the logo's background
- **Accent:** gold (`#c9a227`) — from the logo emblem
- **Cards:** `.card-glow` class — subtle gold border + minimal shadow, lifts on hover
- **Fonts:** Sora (headings) + Inter (body)

## Environment Variables

`.env`:
```
DATABASE_URL=file:./db/custom.db
```

## Notes

- The contact form API (`/api/contact`) currently logs submissions to an in-memory array. For production, replace with email/CRM integration or a database write.
- Images in `public/images/` are already optimized (sharp, mozjpeg). Original raw photos are not included in this zip.
# Edgeway-web
