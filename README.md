# Locus Analytics — Company Website

Professional, conversion-focused website for **Locus Analytics**: intelligent operational systems for healthcare, education, and business in Uganda.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS 3 + shadcn/ui (Radix primitives)
- **Font:** Inter (Google Fonts) + IBM Plex Mono (code/labels)
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file (see `.env.example`):

| Variable | Required | Description |
|---|---|---|
| `VITE_CONTACT_ENDPOINT` | Yes (for form) | POST endpoint for contact form (e.g. Formspree: `https://formspree.io/f/YOUR_ID`) |
| `VITE_ANALYTICS_PROVIDER` | No | `"plausible"`, `"ga4"`, or `"none"` (default: none) |
| `VITE_PLAUSIBLE_DOMAIN` | If plausible | Your domain registered with Plausible |
| `VITE_GA4_ID` | If ga4 | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) |

## Deployment (Static Hosting)

This is a static single-page app. After building:

```bash
npm run build
```

The `dist/` folder contains the production-ready static files. Deploy to any static host:

- **Vercel:** `vercel --prod` (auto-detects Vite)
- **Netlify:** Set build command to `npm run build`, publish directory to `dist`
- **Cloudflare Pages:** Same as Netlify
- **GitHub Pages:** Push `dist/` contents or use a GitHub Action
- **Custom server:** Serve `dist/` as static files; ensure all routes fallback to `index.html`

## Project Structure

```
src/
├── sections/           # Page sections (top-level layout blocks)
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── IntelligentSystems.tsx
│   ├── SectorPrism.tsx
│   ├── Capabilities.tsx
│   ├── Principles.tsx
│   ├── Proof.tsx        # Case studies + testimonials
│   ├── Demo.tsx         # Platform demo screenshots/video
│   ├── Contact.tsx      # Contact form (real submission)
│   └── Footer.tsx
├── components/ui/      # shadcn/ui components (Radix-based)
├── hooks/              # Custom React hooks
├── lib/
│   ├── utils.ts        # Tailwind merge utilities
│   └── analytics.ts    # Analytics abstraction (Plausible/GA4)
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global styles + Tailwind directives
public/
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── *.jpg               # Sector images
```

## SEO

- Open Graph + Twitter Card meta tags in `index.html`
- JSON-LD Organization structured data
- `robots.txt` and `sitemap.xml` in `/public`
- Replace `/public/og-image.png` with your actual OG image (1200x630 recommended)

## Analytics Events Tracked

When analytics is enabled (`VITE_ANALYTICS_PROVIDER`):

| Event | Trigger |
|---|---|
| `hero_cta_click` | User clicks primary CTA in hero |
| `contact_submit_success` | Contact form submitted successfully |
| `demo_cta_click` | User clicks "Request a live demo" in Demo section |

## Future Migration Path (Next.js)

When the site needs multi-page routing (blog, individual case study pages, careers), consider migrating to **Next.js App Router**:

```
Suggested Next.js structure:
app/
├── layout.tsx           # Root layout (nav + footer)
├── page.tsx             # Home (current single-page content)
├── blog/
│   ├── page.tsx         # Blog listing
│   └── [slug]/page.tsx  # Individual posts
├── case-studies/
│   ├── page.tsx         # Case studies listing
│   └── [slug]/page.tsx  # Individual case study
├── careers/
│   └── page.tsx
└── contact/
    └── page.tsx         # Standalone contact page
```

Migration steps:
1. `npx create-next-app@latest` with App Router + Tailwind
2. Copy `src/components/ui/` and `src/sections/` directly
3. Move section components into `app/page.tsx` as the home page
4. Add `next-sitemap` for automatic sitemap generation
5. Move SEO meta to Next.js `metadata` exports
6. Keep the same Tailwind config and CSS variables
