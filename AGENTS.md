# AURA PRO Landing Page

## Overview
A premium dark-mode landing page for the AURA PRO audio product, built with React 18 + Vite 5 + Tailwind CSS 3 + Lucide React icons.

## Setup
- Run: `docker compose -f docker-compose.base44.yml up -d --build`
- Web entry point: port 3000
- The dev server (Vite) runs with `--host 0.0.0.0` for sandbox access.
- Source is bind-mounted; edits hot-reload via Vite HMR (CHOKIDAR_USEPOLLING enabled for bind-mount compatibility).

## Project Structure
- `src/App.jsx` — root, imports all section components
- `src/components/` — one file per page section (Header, Hero, ANCSimulator, Features, SpecBreakdown, Gallery, Unboxing, Testimonials, FinalCTA, Footer)
- `src/index.css` — Tailwind layers + custom component classes (glass-card, btn-primary, btn-outline, cyan-glow)

## Key Details
- No external secrets required — the app is fully static/frontend.
- No database, no backend API.
- Images use Unsplash CDN URLs (no local assets needed beyond favicon.svg).
- Fonts loaded via Google Fonts (Plus Jakarta Sans + Inter) in index.html.
- Tailwind config extends with custom colors (obsidian #0b0f17, cyan-neon #00F2FE) and keyframe animations (wave, float, glow-pulse).

## Verification
- `curl http://localhost:3000/` returns 200.
- Preview screenshot confirms all 10 sections render with the dark theme.
