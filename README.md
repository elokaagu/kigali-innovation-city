# Citisquare

Official investment platform website for **Citisquare** — connecting global capital to Africa's highest-impact development opportunities.

Featuring **Kigali Innovation City (KIC)** as our flagship project — the Digital Heart of Africa.

Built with **Next.js 15**, **React 18**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── assets/               # Brand assets (Citisquare logos)
├── components/
│   ├── brand/            # CitisquareLogo
│   ├── common/           # Shared components (SectionHeader)
│   ├── layout/           # Navigation, MobileCTA
│   ├── sections/         # Page sections (Hero, Vision, Opportunities, etc.)
│   └── ui/               # shadcn/ui primitives
└── lib/                  # Utilities
```

## Brand

- **Citisquare** — Africa's investment platform
- **Kigali Innovation City** — Featured flagship opportunity (62-hectare mixed-use innovation hub in Rwanda)

## Deploy

Deploy to [Vercel](https://vercel.com) or any platform supporting Next.js.

```bash
npm run build
```
