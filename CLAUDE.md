# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (Next.js Turbopack)
- `npm run build` — Production build (also validates TypeScript)
- `npm run lint` — Run ESLint
- No test framework is configured

## Architecture

**Next.js 16 App Router** with dynamic locale routing (`src/app/[locale]/`). Single-page portfolio — all sections render on one page.

**i18n**: JSON dictionary files in `src/i18n/dictionaries/{en,es}.json`. Loaded server-side via `getDictionary(locale)` and passed as typed props to each section. Root `src/app/page.tsx` detects browser language and redirects to `/en` or `/es`. To add content (projects, experience, etc.), update both dictionary files — see `PROJECTS.md` for the pattern.

**Styling**: Tailwind CSS 4 with CSS custom properties in `src/app/globals.css`. Theme colors defined as CSS variables (`:root` for light, `.dark` for dark). Custom utilities: `.gradient-text`, `.gradient-border`, `.glass` (glassmorphism). Dark mode via `next-themes` with `class` strategy (default: dark).

**Component structure**:
- `src/components/sections/` — page sections (Hero, About, Experience, Projects, TechStack, Education, Contact)
- `src/components/layout/` — Navbar, Footer
- `src/components/ui/` — reusable pieces (AnimatedSection, ProjectCard, TimelineItem, TechBadge, AmbientBackground)

**Animations**: Framer Motion throughout. `AnimatedSection` wraps content for scroll-triggered fade-in. Projects section uses a custom drag/swipe carousel.

**Path alias**: `@/*` maps to `src/*`.
