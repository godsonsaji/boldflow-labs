# BoldFlow Labs | AI Automation & Digital Growth Agency

Official production website for **BoldFlow Labs** — an AI automation and digital growth agency building high-converting growth engines, WhatsApp business bots, custom CRM automations, and scalable search infrastructure for high-growth businesses.

---

## 🚀 Core Services

1. **WhatsApp Automation**: Conversational AI flows, instant lead qualification, catalog checkout, CRM sync, and broadcast engagement via WhatsApp Cloud API.
2. **Business Automation & CRM**: End-to-end webhook architecture, n8n/Make pipelines, lead-to-deal automation, and unified client dashboards.
3. **Performance Marketing**: Full-funnel Meta & Google Ads campaigns, automated budget optimization, multi-touch conversion tracking, and high-converting landing pages.
4. **SEO Services**: Technical SEO audits, site speed optimization, search-intent content clustering, and Schema.org structured data engineering.
5. **Website Development**: High-performance Next.js web applications, headless CMS, modern UI/UX design, and sub-second page speeds.
6. **Google Business Profile & Local SEO**: Local pack 3-pack dominance, geo-grid optimization, automated review management, and high-intent local inbound lead gen.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + Custom Design System
- **Icons**: [Lucide React](https://lucide.dev)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **CMS & Backend**: Firebase Firestore & Firebase Auth for Blog Management & Admin Panel
- **Structured Data**: Schema.org JSON-LD (Organization, Services, FAQPage, BreadcrumbList, BlogPosting)
- **Search Optimization**: Dynamic `sitemap.xml`, canonical headers, OpenGraph / Twitter Cards, and `llms.txt`

---

## 📁 Repository Structure

```
boldflow-labs/
├── public/
│   ├── brand/               # Official BoldFlow Brand Kit (SVG/PNG logos, icons, favicons, social cards)
│   ├── favicon.ico          # Vector/rasterized brand favicons
│   ├── llms.txt             # Structured context for LLM search crawlers
│   └── og-image.png         # Default 1200x630 social preview card
├── src/
│   ├── app/
│   │   ├── about/           # Agency vision, values & leadership
│   │   ├── admin/           # Blog CMS admin panel (auth-protected)
│   │   ├── api/
│   │   │   ├── contact/     # Contact form API endpoint
│   │   │   └── create-post/ # n8n/webhook automated post ingestion
│   │   ├── blog/            # Dynamic SEO blog & slug reader
│   │   ├── contact/         # Booking & lead capture
│   │   ├── services/        # Service hub & 6 dedicated service pages
│   │   ├── work/            # Case studies & client success metrics
│   │   ├── layout.tsx       # Root layout with Organization & WebSite JSON-LD
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic sitemap with canonical indexation
│   ├── components/          # Production components (Navbar, Footer, ContactForm, etc.)
│   ├── context/             # AuthContext for admin Firebase session
│   ├── data/                # Structured services and blog catalog
│   └── firebase/            # Firebase client config
└── next.config.ts           # 301 legacy voice agent redirects & security headers
```

---

## ⚡ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm run start
```

### 4. Code Quality & Linting

```bash
npm run lint
npx tsc --noEmit
```

---

## 🔒 Security & Redirects

- Obsolete legacy voice-agent URLs are permanently redirected (HTTP 301) to their modern service equivalents via `next.config.ts`.
- Content Security, X-Frame-Options, and referrer policies are enforced in HTTP response headers.
- `/admin` routes are protected client-side via Firebase Auth and excluded from search engine crawls via `robots.ts`.
