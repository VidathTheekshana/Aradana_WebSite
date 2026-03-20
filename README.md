# Aradana Caterers Website

A modern, responsive luxury catering website built with Next.js and React.

## Live Site
- **Production:** https://aradanacaterers.com

## Tech Stack
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Google Analytics (GA4)** via `@next/third-parties/google`

## Features
- Elegant hero section with smooth parallax animation
- Responsive navigation and mobile-friendly UI
- Menu, events, about, and contact pages
- Optimized images using `next/image`
- SEO-ready metadata and favicon support
- Google Search Console verification meta integration
- GA4 tracking enabled

## Project Structure
```text
src/
  app/
    layout.tsx
    page.tsx
    menus/
    events/
    about/
    contact/
  components/
    layout/
    sections/
    ui/
public/
  images/
  favicon.ico
  site.webmanifest
```

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run development server
```bash
npm run dev
```

Open: `http://localhost:3000`

### 3) Build for production
```bash
npm run build
npm start
```

## Analytics
Google Analytics is integrated in `src/app/layout.tsx`:

- **Measurement ID:** `G-HSQDTC25BZ`

## SEO / Verification
Google site verification meta tag is included in `src/app/layout.tsx`.

## Deployment
This project is deployed on **Vercel** with:
- Custom domain (`aradanacaterers.com`)
- HTTPS / SSL enabled
- Automatic CI/CD from GitHub

## Scripts
- `npm run dev` – Start local development
- `npm run build` – Production build
- `npm start` – Run production server
- `npm run lint` – Run lint checks

## Author
Developed for **Aradana Caterers**.
