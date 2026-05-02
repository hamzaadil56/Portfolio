# hamzaadil.dev

Personal portfolio for [Muhammad Hamza](https://hamzaadil.dev) — Software Engineer.
Built as a single-page scrollytelling experience with a separate blog at `/blog`.

Stack: **Next.js 13 App Router · TypeScript · Tailwind CSS · Framer Motion · GSAP · shadcn-style primitives**.
Design system: **Cinematic Dark + Editorial Display** (see [`app/globals.css`](app/globals.css) for tokens).

---

## Getting started

```bash
npm install
cp .env.example .env.local         # set BLOG_ADMIN_TOKEN
npm run dev                        # http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

---

## Project structure

```text
app/
├── layout.tsx                # fonts (Geist, Inter, JetBrains Mono), metadata, Toaster
├── globals.css               # design tokens + Tailwind layers
├── page.tsx                  # composes the home-page sections
├── not-found.tsx
├── blog/
│   ├── page.tsx              # list view (ISR, revalidate=60)
│   ├── [id]/page.tsx         # detail view with "Read on {platform}" CTA
│   └── new/page.tsx          # admin: create new post (env-gated)
└── api/blogs/
    ├── _store.ts             # file-based JSON persistence (data/blogs.json)
    ├── route.ts              # GET list / POST create
    └── [id]/route.ts         # GET / PUT / DELETE single post

components/
├── chrome/                   # Nav, Footer, ScrollProgress
├── sections/                 # Hero, About, Skills, Experience, Projects, Hackathons, YoutubeDemos, Testimonials, Contact, SectionShell
├── primitives/               # Reveal, MagneticButton, AnimatedText, TechBadge, StatCounter, YoutubeEmbed
├── blog/                     # BlogCard, BlogForm
└── ui/                       # shadcn primitives kept: button, dialog, select, sheet, sonner, input, label, textarea

data/
├── profile.ts                # name, role, contact, socials
├── experience.ts             # work history + education
├── projects.ts               # featured & archive projects
├── skills.ts                 # categorised stack
├── hackathons.ts             # event entries
├── youtube.ts                # video demos (YouTube IDs)
├── testimonials.ts           # blank by default — auto-hides until populated
├── nav.ts                    # in-page section anchors
└── blogs.json                # runtime-mutable, gitignored

lib/
├── auth-blog.ts              # Bearer-token verifier for blog mutations
├── gsap.ts                   # ScrollTrigger registration (single import site)
└── utils.ts                  # cn() helper
```

---

## How to add content

### A new project

Edit [`data/projects.ts`](data/projects.ts). Set `featured: true` to surface it on the home page (otherwise it stays in the archive). Image can be a remote URL (Pexels/etc.) or a local `import` from `assets/images/`.

### A new hackathon

Edit [`data/hackathons.ts`](data/hackathons.ts). Look for the `// ADD_NEXT_HACKATHON_HERE` comment.

### A new YouTube demo

Edit [`data/youtube.ts`](data/youtube.ts). Only the YouTube ID is required — the thumbnail at `https://i.ytimg.com/vi/{id}/maxresdefault.jpg` and the embed iframe are wired up automatically.

### A new testimonial

Add to [`data/testimonials.ts`](data/testimonials.ts). The Testimonials section unmounts entirely while the array is empty.

### A new blog post

1. Set `BLOG_ADMIN_TOKEN` in `.env.local`.
2. Visit `/blog/new`.
3. Enter the token (stored in `sessionStorage` for the tab — UX shim only; the server matches the token on every request).
4. Fill the form → publish. The post is appended to `data/blogs.json` and shows up at `/blog` immediately.

The blog section is intentionally a **link aggregator** to Dev.to / Medium / Hashnode — full articles live on those platforms.

---

## Blog API contract

All endpoints under `/api/blogs`. Mutations require `Authorization: Bearer <BLOG_ADMIN_TOKEN>`.

| Method | Path | Auth | Body |
| --- | --- | --- | --- |
| `GET` | `/api/blogs` | — | — |
| `POST` | `/api/blogs` | Bearer | `{ title, url, platform, description, tags?, date?, readTime?, gradient?, platformColor? }` |
| `GET` | `/api/blogs/[id]` | — | — |
| `PUT` | `/api/blogs/[id]` | Bearer | partial Blog |
| `DELETE` | `/api/blogs/[id]` | Bearer | — |

```bash
# List
curl http://localhost:3000/api/blogs

# Create
curl -X POST http://localhost:3000/api/blogs \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer $BLOG_ADMIN_TOKEN" \
  -d '{"title":"...","url":"https://...","platform":"Dev.to","description":"..."}'
```

---

## Environment variables

| Name                | Required | Notes                                                             |
|---------------------|----------|-------------------------------------------------------------------|
| `BLOG_ADMIN_TOKEN`  | yes      | Long random secret. Without it, mutations to `/api/blogs` return 500/401. |

Persistence file: `data/blogs.json` is gitignored. On Vercel / serverless deploys you'll want to swap [`app/api/blogs/_store.ts`](app/api/blogs/_store.ts) for a real DB (Supabase / Turso / Postgres) — the public function signatures (`getAllBlogs`, `getBlogById`, `createBlog`, `updateBlog`, `deleteBlog`) are the only contract the routes depend on.

---

## Design system at a glance

Documented inline in [`app/globals.css`](app/globals.css) (`:root` / `.dark` block) and mirrored as Tailwind tokens in [`tailwind.config.ts`](tailwind.config.ts).

- **Surfaces:** `bg-canvas`, `bg-canvas-elevated`, `bg-surface`, `bg-surface-2`
- **Text:** `text-fg`, `text-fg-muted`, `text-fg-subtle`
- **Accent:** `text-accent` / `bg-gradient-accent` / `text-gradient` utility
- **Typography:** `font-display` (Geist) · `font-sans` (Inter) · `font-mono` (JetBrains Mono)
- **Type scale:** `text-display-2xl` → `text-h2` → `text-body` → `text-micro`
- **Motion:** `duration-micro` (150ms) · `duration-std` (320ms) · `duration-cinematic` (720ms) · easing `out-expo` / `in-out-quart`
- **Reduced motion:** all GSAP timelines branch on `prefers-reduced-motion`; Framer reveals fall back to instant via `useReducedMotion()`.

---

## Animation choreography

| Section       | Mechanism                                              |
|---------------|--------------------------------------------------------|
| Hero          | GSAP char-split reveal of the name + Framer fades      |
| Hero          | Cursor-following accent glow (Framer `useMotionValue`) |
| About         | Framer `Reveal` per stanza                             |
| Skills        | Framer `RevealGroup` stagger of bento tiles            |
| Experience    | GSAP scrub-bound progress line draw                    |
| Projects      | GSAP `matchMedia` horizontal pinned scroll on `≥1024px`|
| Hackathons    | Framer stagger card grid                               |
| Demos         | Framer stagger + click-to-load YouTube lightbox        |
| Contact       | Framer `Reveal` columns                                |
| Globally      | Framer-driven scroll progress bar at the top           |

---

## Roadmap / known TODOs

- `// EMAIL_SERVICE_HERE` — contact form opens a `mailto:` today; swap for Resend / Formspree later.
- `// ADD_TESTIMONIALS_HERE` — testimonials section auto-shows when populated.
- `// ANALYTICS_HERE` — drop in Plausible / Vercel Analytics in `app/layout.tsx`.
- OG image — currently referenced as `/og-image.png` in metadata; generate a 1200×630 image (or wire up `@vercel/og` later).
- Blog persistence — replace `_store.ts` with a real DB before deploying to a serverless platform that has an ephemeral filesystem.

---

## Author

Muhammad Hamza · Karachi · [hamzaadil56@gmail.com](mailto:hamzaadil56@gmail.com)
[GitHub](https://github.com/hamzaadil56) · [LinkedIn](https://www.linkedin.com/in/muhammad-hamza-adil/) · [Twitter](https://twitter.com/hamza_chemE_dev)
