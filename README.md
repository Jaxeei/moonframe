# MoonFrame — Premium Web Design Agency

A dark, luxury-minimalist marketing site for the MoonFrame web design agency.
Built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and
shadcn-style UI primitives.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** throughout
- **Tailwind CSS v4** with a custom token system (`app/globals.css`)
- **Framer Motion** — page transitions (`app/template.tsx`), scroll reveals, hero choreography
- **Radix UI / shadcn-style primitives** — `components/ui/`
- **SEO** — per-page metadata, Open Graph, `sitemap.ts`, `robots.ts`

## Getting started

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
```

## Structure

```
app/                 # routes: /, /services, /portfolio, /about, /contact
  layout.tsx         # fonts, metadata, navbar + footer
  template.tsx       # Framer Motion page transitions
components/
  home/              # the ten home-page sections
  layout/            # navbar, footer, logo
  motion/            # Reveal scroll-animation primitives
  ui/                # shadcn-style button, accordion
lib/
  data.ts            # all site copy and content in one place
  utils.ts           # cn() helper
public/logo.svg      # brand mark (swap for the official asset)
```

## Brand tokens

| Token   | Value     | Use                         |
| ------- | --------- | --------------------------- |
| `void`  | `#050608` | page background             |
| `navy`  | `#0a0f1e` | raised surfaces             |
| `moon`  | `#edf2fa` | primary text                |
| `lunar` | `#98a2b8` | secondary text              |
| `glow`  | `#4d7fff` | electric blue accent / CTAs |

Display type is Sora, body is Inter, labels are IBM Plex Mono, and the single
serif accent (hero, final CTA) is Instrument Serif italic.

All copy lives in `lib/data.ts` — edit content there without touching components.
The contact form currently simulates submission; wire `components/contact-form.tsx`
to your form backend (API route, Resend, Formspree) before going live.
